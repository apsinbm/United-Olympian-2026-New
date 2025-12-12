import { google } from 'googleapis';

const SHEET_ID = '1543n4DIpHyBXFHFoGZGS9lggPlue2xLZ-bNyKYcU1Ko';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://olympiansunited.vercel.app',
  'https://olympiansunited.org',
  'http://localhost:3000',
  'http://localhost:5173'
];

// Sanitize input to prevent injection attacks
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .slice(0, 1000) // Limit length
    .replace(/[<>]/g, ''); // Remove potential HTML tags
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
      credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    } else {
      credentials = {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      };
    }

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
    return res.status(500).json({ error: 'Failed to submit form' });
  }
}
