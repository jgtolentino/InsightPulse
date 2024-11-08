import express from 'express';
import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const db = new Database('demo_requests.db');

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS demo_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-specific-password'
  }
});

app.use(cors());
app.use(express.json());

app.post('/api/request-demo', async (req, res) => {
  const { email } = req.body;

  try {
    // Save to database
    const stmt = db.prepare('INSERT INTO demo_requests (email) VALUES (?)');
    const result = stmt.run(email);

    // Send confirmation email
    await transporter.sendMail({
      from: '"InsightPulseAI" <your-email@gmail.com>',
      to: email,
      subject: 'Your InsightPulseAI Demo Request',
      html: `
        <h1>Thank you for requesting a demo!</h1>
        <p>We've received your demo request and our team will contact you shortly.</p>
        <p>Best regards,<br>The InsightPulseAI Team</p>
      `
    });

    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});