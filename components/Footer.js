import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const LOGO_FILE = '/Wappen.png'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* SPALTE 1: Das Wappen Logo */}
        <div className={styles.logoColumn}>
          <Image 
            src={LOGO_FILE} 
            alt="Höllenreiner A.G. Logo" 
            width={180} 
            height={220} 
            className={styles.footerLogo}
          />
        </div>

        {/* SPALTE 2: Brand & Info */}
        <div className={styles.column}>
          <span className={styles.columnTitle}>Höllenreiner A.G.</span>
          <p className={styles.text}>
            Ihr seriöser Partner für den Ankauf von Edelmetallen, Antiquitäten und Sammlungen. 
            Wir legen Wert auf Transparenz, Diskretion und eine persönliche Beratung auf Augenhöhe.
          </p>
        </div>

        {/* SPALTE 3: Schnellzugriff */}
        <div className={styles.column}>
          <span className={styles.columnTitle}>Menü</span>
          <nav className={styles.linkList}>
            <Link href="/" className={styles.link}>Startseite</Link>
            <Link href="/leistungen" className={styles.link}>Leistungen</Link>
            <Link href="/ueber-uns" className={styles.link}>Über Uns</Link>
            <Link href="/kontakt" className={styles.link}>Kontakt</Link>
            <Link href="/impressum" className={styles.link}>Impressum</Link>
            <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
          </nav>
        </div>

        {/* SPALTE 4: Kontakt */}
        <div className={styles.column}>
          <span className={styles.columnTitle}>Kontakt</span>
          
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <a href="tel:017688312191" className={styles.link}>0176 88312191</a>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.icon}>✉️</span>
            <a href="mailto:angelo.h.1998@outlook.de" className={styles.link}>angelo.h.1998@outlook.de</a>
          </div>

          <div className={styles.contactItem} style={{marginTop: '20px'}}>
            <span className={styles.icon}>📅</span>
            <span>Termine nach Vereinbarung</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.icon}>🚗</span>
            <span>Hausbesuche & Vor-Ort-Service</span>
          </div>
        </div>

      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Höllenreiner A.G. - Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}