import { google } from 'googleapis';

const SHEET_ID = '1543n4DIpHyBXFHFoGZGS9lggPlue2xLZ-bNyKYcU1Ko';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
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

    if (!name || !noa || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
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
        values: [[timestamp, name, noa, email, whatsapp || '', message || '']],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ error: 'Failed to submit form' });
  }
}
