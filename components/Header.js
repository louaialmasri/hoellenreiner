import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './Header.module.css'; 

const LOGO_FILE = '/Wappen.png'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // NEU: State um zu prüfen, ob gescrollt wurde
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // NEU: Scroll-Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Wenn mehr als 50px gescrollt
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Aufräumen beim Verlassen
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    // NEU: Wir fügen eine zweite CSS-Klasse hinzu, wenn gescrollt wurde
    <header className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ''}`}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.logoLink}>
          <Image 
            src={LOGO_FILE} 
            alt="Höllenreiner A.G. Wappen" 
            width={50} 
            height={50} 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>HÖLLENREINER A.G.</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/leistungen" className={styles.navLink}>Leistungen</Link>
          <Link href="/ueber-uns" className={styles.navLink}>Über Uns</Link>
          <Link href="/kontakt" className={styles.ctaButton}>
            Termin vereinbaren
          </Link>
        </nav>

        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className={styles.mobileNavLink}>Home</Link>
              <Link href="/leistungen" className={styles.mobileNavLink}>Leistungen</Link>
              <Link href="/ueber-uns" className={styles.mobileNavLink}>Über Uns</Link>
              
              <Link href="/kontakt" className={styles.ctaButton} style={{fontSize: '1.2rem', padding: '15px 40px'}}>
                Termin vereinbaren
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}