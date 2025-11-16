import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.contact}>
          <h3>Höllenreiner A.G.</h3>
          <p>Email: <a href="mailto:angelo.h.1998@outlook.de">angelo.h.1998@outlook.de</a></p>
          <p>Telefon: <a href="tel:017688312191">0176 88312191</a></p>
        </div>
        <div style={styles.legal}>
          <Link href="/impressum" style={styles.link}>Impressum</Link>
          <Link href="/datenschutz" style={styles.link}>Datenschutz</Link>
        </div>
      </div>
      <div style={styles.copyright}>
        © {new Date().getFullYear()} Höllenreiner A.G. - Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1512',
    borderTop: '2px solid var(--color-gold-dark)',
    color: 'var(--color-text)',
    padding: '40px 0 20px 0',
    marginTop: '50px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  contact: {
    flex: 1,
  },
  legal: {
    flex: 1,
    textAlign: 'right',
  },
  link: {
    display: 'block',
    marginBottom: '10px',
    color: 'var(--color-text)',
    fontSize: '1.1rem',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '0.9rem',
    borderTop: '1px solid #333',
    paddingTop: '20px',
    color: '#888',
  }
};