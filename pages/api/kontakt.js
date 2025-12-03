import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, image } = req.body; // 'image' kommt dazu

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }

  // Konfiguration (Diese Werte müssen später in Vercel eingetragen werden)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // E-Mail Optionen vorbereiten
  const mailOptions = {
    from: `"Webseite Höllenreiner" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `📸 Neue Anfrage von ${name}`, // Emoji im Betreff für Aufmerksamkeit
    text: `
      Neue Nachricht von der Webseite:

      Name: ${name}
      E-Mail: ${email}

      Nachricht:
      ${message}
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; background-color: #f9f7f2; border: 1px solid #e0d5c5;">
        <h2 style="color: #b8860b;">Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">
        <h3 style="color: #3e3228;">Nachricht:</h3>
        <p style="white-space: pre-wrap; font-size: 1.1em;">${message}</p>
        ${image ? '<p style="color: green;">📎 <strong>Ein Bild wurde angehängt.</strong></p>' : ''}
      </div>
    `,
    attachments: []
  };

  // Wenn ein Bild dabei ist, fügen wir es als Anhang hinzu
  if (image) {
    mailOptions.attachments.push({
      path: image, // Der Base64-String vom Frontend
    });
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-Mail erfolgreich gesendet' });
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    res.status(500).json({ message: 'Fehler beim Senden der E-Mail' });
  }
}