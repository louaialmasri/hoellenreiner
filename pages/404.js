import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Seite nicht gefunden - Höllenreiner A.G.</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.errorCode}>404</h1>
        <div style={styles.divider}></div>
        <h2 style={styles.title}>Dieses Stück fehlt in unserer Sammlung.</h2>
        <p style={styles.text}>
          Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie bereits verkauft 
          oder an einen sicheren Ort verlagert.
        </p>
        <Link href="/" style={styles.button}>
          Zurück zur Startseite
        </Link>
      </div>
    </>
  );
}

const styles = {
  container: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  errorCode: {
    fontSize: '6rem',
    margin: 0,
    // Wir nutzen hier direkt die Gold-Farbe, da wir Zugriff auf globale Variablen haben
    color: 'var(--color-gold-dark)', 
    lineHeight: 1,
  },
  divider: {
    width: '60px',
    height: '2px',
    backgroundColor: 'var(--color-gold-light)',
    margin: '20px 0',
  },
  title: {
    marginBottom: '15px',
    color: 'var(--color-text)',
  },
  text: {
    marginBottom: '30px',
    color: '#666',
  },
  button: {
    padding: '12px 30px',
    backgroundColor: 'var(--color-gold-dark)',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: 'opacity 0.2s',
  }
};