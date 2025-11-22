import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './Header.module.css'; 

const LOGO_FILE = '/Wappen.png'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Schließt das Menü automatisch, wenn man auf einen Link klickt (Seite wechselt)
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  // Verhindert Scrollen im Hintergrund, wenn Menü offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logo */}
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

        {/* Desktop Navigation (wird per CSS auf Handy ausgeblendet) */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/leistungen" className={styles.navLink}>Leistungen</Link>
          <Link href="/ueber-uns" className={styles.navLink}>Über Uns</Link>
          <Link href="/kontakt" className={styles.ctaButton}>
            Termin vereinbaren
          </Link>
        </nav>

        {/* Hamburger Button (wird per CSS auf Desktop ausgeblendet) */}
        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {/* Ein einfaches SVG Icon für den Hamburger / das X */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" /> // Das "X"
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Die 3 Linien
            )}
          </svg>
        </button>

        {/* Mobile Fullscreen Menu */}
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