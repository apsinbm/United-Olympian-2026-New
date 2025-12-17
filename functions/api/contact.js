// Cloudflare Pages Function for contact form
// Uses Google Sheets API via fetch (no googleapis package needed)

const ALLOWED_ORIGINS = [
  'https://olympiansunited.org',
  'https://www.olympiansunited.org',
  'https://olympians-united.pages.dev',
  'http://localhost:3000',
  'http://localhost:5173'
];

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { timestamp: now, count: 1 });
    return false;
  }

  record.count++;
  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  return false;
}

// Sanitize input to prevent injection attacks
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  let sanitized = str
    .trim()
    .slice(0, 1000) // Limit length
    .replace(/[<>]/g, ''); // Remove potential HTML tags

  // Prevent Google Sheets formula injection
  if (/^[=+\-@]/.test(sanitized)) {
    sanitized = "'" + sanitized;
  }

  return sanitized;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token, ip, secretKey) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
      remoteip: ip
    })
  });

  const data = await response.json();
  return data.success === true;
}

// Base64url encode helper for Cloudflare Workers
function base64urlEncodeBytes(bytes) {
  let binary = '';
  const len = bytes.byteLength || bytes.length;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// Create JWT for Google API authentication
async function createJWT(credentials) {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  // Use TextEncoder for proper UTF-8 encoding
  const headerBytes = new TextEncoder().encode(JSON.stringify(header));
  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));

  const encodedHeader = base64urlEncodeBytes(headerBytes);
  const encodedPayload = base64urlEncodeBytes(payloadBytes);

  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  // Import the private key for signing
  const privateKeyPem = credentials.private_key;
  const pemContents = privateKeyPem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');

  // Decode base64 PEM to bytes
  const binaryString = atob(pemContents);
  const binaryKey = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    binaryKey[i] = binaryString.charCodeAt(i);
  }

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = base64urlEncodeBytes(new Uint8Array(signature));

  return `${signatureInput}.${encodedSignature}`;
}

// Get access token from Google
async function getAccessToken(credentials) {
  const jwt = await createJWT(credentials);

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Token error: ${data.error_description || data.error}`);
  }
  return data.access_token;
}

// Append row to Google Sheets
async function appendToSheet(accessToken, sheetId, values) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ values: [values] })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Sheets API error: ${error.error?.message || 'Unknown error'}`);
  }

  return response.json();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const origin = request.headers.get('Origin');
  const corsHeaders = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (ALLOWED_ORIGINS.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
  }

  // Rate limiting
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (isRateLimited(clientIP)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Check environment variables
  const SHEET_ID = env.GOOGLE_SHEET_ID;
  if (!SHEET_ID) {
    console.error('GOOGLE_SHEET_ID environment variable is not set');
    return new Response(JSON.stringify({ error: 'Service configuration error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { name, noa, email, whatsapp, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !noa || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Verify Turnstile CAPTCHA (required - fail closed if not configured)
    const TURNSTILE_SECRET = env.TURNSTILE_SECRET_KEY;
    if (!TURNSTILE_SECRET) {
      console.error('TURNSTILE_SECRET_KEY environment variable is not set');
      return new Response(JSON.stringify({ error: 'Service configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: 'Security verification required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken, clientIP, TURNSTILE_SECRET);
    if (!isValidToken) {
      return new Response(JSON.stringify({ error: 'Security verification failed. Please try again.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedNoa = sanitizeInput(noa);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedWhatsapp = sanitizeInput(whatsapp);
    const sanitizedMessage = sanitizeInput(message);

    // Parse credentials
    let credentials;
    if (env.GOOGLE_CREDENTIALS) {
      credentials = JSON.parse(env.GOOGLE_CREDENTIALS);
    } else {
      return new Response(JSON.stringify({ error: 'Service configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Get access token and append to sheet
    const accessToken = await getAccessToken(credentials);
    const timestamp = new Date().toISOString();
    await appendToSheet(accessToken, SHEET_ID, [
      timestamp,
      sanitizedName,
      sanitizedNoa,
      sanitizedEmail,
      sanitizedWhatsapp,
      sanitizedMessage
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error submitting form:', error.message);
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin');
  const corsHeaders = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (ALLOWED_ORIGINS.includes(origin)) {
    corsHeaders['Access-Control-Allow-Origin'] = origin;
  }

  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}
