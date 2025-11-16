import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Höllenreiner A.G.</h3>
          <p>Email: <a href="mailto:angelo.h.1998@outlook.de">angelo.h.1998@outlook.de</a></p>
          <p>Telefon: <a href="tel:017688312191">0176 88312191</a></p>
        </div>
        <div className={styles.legal}>
          <Link href="/impressum" className={styles.link}>Impressum</Link>
          <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Höllenreiner A.G. - Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}