import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Alle Felder sind Pflichtfelder.' });
  }

  // Konfiguration aus den Environment Variables (.env.local)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true für Port 465, sonst false
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // E-Mail senden
    await transporter.sendMail({
      from: `"Webseite Höllenreiner" <${process.env.EMAIL_FROM}>`, // Absender (vom E-Mail-Dienst)
      to: process.env.EMAIL_TO, // Empfänger (Du)
      replyTo: email, // Antwort-Adresse ist der Nutzer
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
        Neue Nachricht von der Webseite:

        Name: ${name}
        E-Mail: ${email}

        Nachricht:
        ${message}
      `,
      html: `
        <h2>Neue Nachricht von der Webseite</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <h3>Nachricht:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    res.status(500).json({ message: 'Fehler beim Senden der E-Mail' });
  }
}