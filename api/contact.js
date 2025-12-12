import { google } from 'googleapis';

// Use environment variable for Sheet ID (defense in depth)
const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1543n4DIpHyBXFHFoGZGS9lggPlue2xLZ-bNyKYcU1Ko';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://olympiansunited.vercel.app',
  'https://olympiansunited.org',
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
  // Cells starting with =, +, -, @ are interpreted as formulas
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

export default async function handler(req, res) {
  // Set CORS headers with origin validation
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting check
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(clientIP)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const { name, noa, email, whatsapp, message } = req.body;

    // Validate required fields
    if (!name || !noa || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedNoa = sanitizeInput(noa);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedWhatsapp = sanitizeInput(whatsapp);
    const sanitizedMessage = sanitizeInput(message);

    // Initialize Google Sheets API - try GOOGLE_CREDENTIALS first, fall back to individual vars
    let credentials;
    if (process.env.GOOGLE_CREDENTIALS) {
      try {
        credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
        console.log('Using GOOGLE_CREDENTIALS, client_email:', credentials.client_email);
      } catch (parseErr) {
        console.error('Failed to parse GOOGLE_CREDENTIALS:', parseErr.message);
        throw new Error('Invalid GOOGLE_CREDENTIALS JSON');
      }
    } else {
      credentials = {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      };
      console.log('Using individual env vars, client_email:', credentials.client_email);
    }
    console.log('Using SHEET_ID:', SHEET_ID);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append row to sheet
    const timestamp = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, sanitizedName, sanitizedNoa, sanitizedEmail, sanitizedWhatsapp, sanitizedMessage]],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    // Log error details server-side only (not exposed to client)
    console.error('Error submitting form:', error.message);
    console.error('Stack:', error.stack);
    // Return generic error to client (don't leak internal details)
    // TEMP: Include error message for debugging
    return res.status(500).json({ error: 'Failed to submit form', debug: error.message });
  }
}
