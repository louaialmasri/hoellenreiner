import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Kontakt.module.css';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('');
  
  // SPAM-SCHUTZ: Das Honeypot Feld (für Bots)
  const [honeypot, setHoneypot] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert("Das Bild ist zu groß (Maximal 3 MB).");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // SPAM-CHECK: Wenn das Honeypot-Feld ausgefüllt ist, brechen wir ab (tun aber so, als ob es geklappt hat)
    if (honeypot) {
      console.log("Spam detected!");
      setStatus('success'); // Fake success für den Bot
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, image }),
      });

      if (res.status === 200) {
        setStatus('success');
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
      
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Kontaktieren Sie uns</h1>
          <p>
            Möchten Sie eine unverbindliche erste Einschätzung oder einen Termin vereinbaren?<br/>
            Wir sind für Sie da – diskret und persönlich.
          </p>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* SPAM-FALLE (Unsichtbar für Menschen) */}
          <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}>
            <label htmlFor="website_url_check">Bitte dieses Feld leer lassen</label>
            <input
              type="text"
              id="website_url_check"
              name="website_url_check"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
              placeholder="Beschreiben Sie Ihr Anliegen..."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Bild anhängen (Optional, max 3MB)</label>
            <div className={styles.fileUploadWrapper}>
              <input 
                type="file" 
                id="file-upload" 
                accept="image/*" 
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
              Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg}>
              Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.
            </p>
          )}
        </form>
      </div>
    </>
  );
}