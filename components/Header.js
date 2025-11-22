import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; 

const LOGO_FILE = '/Wappen.png'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src={LOGO_FILE} 
            alt="Höllenreiner A.G. Wappen" 
            width={60} // Etwas kleiner für den Sticky Header, wirkt eleganter
            height={60} 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>HÖLLENREINER A.G.</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/leistungen" className={styles.navLink}>Leistungen</Link>
          <Link href="/ueber-uns" className={styles.navLink}>Über Uns</Link>
          
          {/* Der neue Button statt einfachem Link */}
          <Link href="/kontakt" className={styles.ctaButton}>
            Termin vereinbaren
          </Link>
        </nav>
      </div>
    </header>
  );
}