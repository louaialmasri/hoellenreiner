import Link from 'next/link';
import Image from 'next/image';

const LOGO_FILE = '/wappen.jpg'; 

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link href="/" style={styles.logoLink}>
          {/* KORRIGIERTE IMAGE SYNTAX (mit 'priority') */}
          <Image 
            src={LOGO_FILE} 
            alt="Höllenreiner A.G. Wappen" 
            width={80} 
            height={80} 
            style={styles.logoImage}
            priority // Sagt Next.js, das Logo schnell zu laden
          />
          <span style={styles.logoText}>HÖLLENREINER A.G.</span>
        </Link>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/leistungen" style={styles.navLink}>Leistungen</Link>
          <Link href="/ueber-uns" style={styles.navLink}>Über Uns</Link>
          <Link href="/kontakt" style={styles.navLink}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}

// Styles... (Rest bleibt gleich)
const styles = {
  header: {
    backgroundColor: '#1a1512',
    borderBottom: '2px solid var(--color-gold-dark)',
    padding: '10px 0',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    borderRadius: '50%',
    marginRight: '15px',
    border: '1px solid var(--color-gold-dark)',
  },
  logoText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--color-gold-light)',
    letterSpacing: '1px',
  },
  nav: {
    display: 'flex',
    gap: '25px',
  },
  navLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  }
};