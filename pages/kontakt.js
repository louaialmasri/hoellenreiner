import Head from 'next/head';
import { useState } from 'react';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', 'loading'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus('success');
        // Felder leeren
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        console.error(data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - Höllenreiner A.G.</title>
      </Head>
      <div className="container" style={{maxWidth: '700px'}}>
        <h1>Kontaktieren Sie uns</h1>
        <p>
          Haben Sie Fragen zu Ihren Wertgegenständen oder möchten Sie eine unverbindliche erste Einschätzung? 
          Nutzen Sie unser Kontaktformular oder rufen Sie uns an.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Ihre Nachricht</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.button} disabled={status === 'loading'}>
            {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
          </button>

          {status === 'success' && (
            <p style={styles.successMsg}>
              Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.
            </p>
          )}
          {status === 'error' && (
            <p style={styles.errorMsg}>
              Fehler. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.
            </p>
          )}
        </form>
      </div>
    </>
  );
}

// Styling für das Formular
const styles = {
  form: {
    backgroundColor: 'var(--color-form-bg)',
    padding: '30px',
    borderRadius: '8px',
    marginTop: '30px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1.1rem',
    color: 'var(--color-gold-light)',
  },
  input: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'var(--color-background)',
    border: '1px solid var(--color-gold-dark)',
    borderRadius: '4px',
    color: 'var(--color-text)',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'var(--color-background)',
    border: '1px solid var(--color-gold-dark)',
    borderRadius: '4px',
    color: 'var(--color-text)',
    fontSize: '1rem',
    fontFamily: 'var(--font-sans)',
  },
  button: {
    backgroundColor: 'var(--color-gold-dark)',
    color: 'var(--color-background)',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  successMsg: {
    color: 'green',
    marginTop: '15px',
  },
  errorMsg: {
    color: 'red',
    marginTop: '15px',
  }
};