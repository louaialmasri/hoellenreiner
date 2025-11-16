import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // Importiert das CSS Modul

const LOGO_FILE = '/Wappen.png'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src={LOGO_FILE} 
            alt="Höllenreiner A.G. Wappen" 
            width={80} 
            height={80} 
            className={styles.logoImage}
            // 'priority' entfernt, um die React-Warnung aus dem Log zu beheben.
          />
          <span className={styles.logoText}>HÖLLENREINER A.G.</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/leistungen" className={styles.navLink}>Leistungen</Link>
          <Link href="/ueber-uns" className={styles.navLink}>Über Uns</Link>
          <Link href="/kontakt" className={styles.navLink}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}