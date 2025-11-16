import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Kontakt.module.css';

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

      if (res.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - Höllenreiner A.G.</title>
      </Head>
      <div className={`container ${styles.formContainer}`}>
        <h1>Kontaktieren Sie uns</h1>
        <p>
          Haben Sie Fragen zu Ihren Wertgegenständen oder möchten Sie eine unverbindliche erste Einschätzung? 
          Nutzen Sie unser Kontaktformular oder rufen Sie uns an.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.targe.value)}
              required
              className={styles.input}
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
            />
          </div>

          <button type="submit" className={styles.button} disabled={status === 'loading'}>
            {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
          </button>

          {status === 'success' && (
            <p className={styles.successMsg}>
              Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg}>
              Fehler. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.
            </p>
          )}
        </form>
      </div>
    </>
  );
}