import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Kontakt.module.css';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null); // Das Bild
  const [fileName, setFileName] = useState(''); // Der Dateiname für die Anzeige
  const [status, setStatus] = useState(''); // 'success', 'error', 'loading'

  // Funktion: Bild verarbeiten
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Größen-Check: Max 3MB (Vercel Serverless Limit ist ~4.5MB)
      if (file.size > 3 * 1024 * 1024) {
        alert("Das Bild ist zu groß (Maximal 3 MB). Bitte wählen Sie ein kleineres Bild.");
        return;
      }

      setFileName(file.name);
      
      // Bild in Base64 umwandeln
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Wir senden das Bild mit
        body: JSON.stringify({ name, email, message, image }),
      });

      if (res.status === 200) {
        setStatus('success');
        // Alles zurücksetzen
        setName('');
        setEmail('');
        setMessage('');
        setImage(null);
        setFileName('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - Höllenreiner A.G.</title>
      </Head>
      
      {/* Dunkler Page Hero */}
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Kontaktieren Sie uns</h1>
          <p>
            Haben Sie Fragen zu Ihren Wertgegenständen oder möchten Sie eine unverbindliche erste Einschätzung?<br/>
            Senden Sie uns gerne vorab ein Bild.
          </p>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
              placeholder="Ihr Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder="ihre@email.de"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Ihre Nachricht</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
              className={styles.textarea}
              placeholder="Beschreiben Sie Ihr Objekt..."
            />
          </div>

          {/* Der neue Bild-Upload */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Bild anhängen (Optional, max 3MB)</label>
            <div className={styles.fileUploadWrapper}>
              <input 
                type="file" 
                id="file-upload" 
                accept="image/*" // Nur Bilder erlauben
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              <label htmlFor="file-upload" className={styles.fileLabel}>
                {fileName ? `✅ ${fileName}` : '📷 Foto auswählen'}
              </label>
            </div>
          </div>

          <button type="submit" className={styles.button} disabled={status === 'loading'}>
            {status === 'loading' ? 'Wird gesendet...' : 'Nachricht absenden'}
          </button>

          {status === 'success' && (
            <p className={styles.successMsg}>
              Vielen Dank! Ihre Nachricht (und Bild) wurde erfolgreich gesendet. Wir melden uns in Kürze.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg}>
              Fehler beim Senden. Bitte überprüfen Sie, ob das Bild kleiner als 3MB ist oder rufen Sie uns an.
            </p>
          )}
        </form>
      </div>
    </>
  );
}