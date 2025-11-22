import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion'; // Für die Animation

const BANNER_FILE = '/banner-home.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Höllenreiner A.G. - Werte wahren, Schätze erkennen</title>
        <meta name="description" content="Ihr Partner für den Ankauf von Edelmetallen, Antiquitäten und Sammlerstücken." />
      </Head>
      
      <div className={styles.hero}>
        <Image 
          src={BANNER_FILE} 
          alt="Höllenreiner A.G. Banner" 
          fill 
          style={{ objectFit: 'contain', backgroundColor: 'var(--color-background)' }} 
          priority 
        />
        <div className={styles.heroContent}>
          <h1>WERTE WAHREN, SCHÄTZE ERKENNEN</h1>
        </div>
      </div>

      <div className={`container ${styles.welcome}`}>
        <h2>Willkommen bei der Höllenreiner A.G.</h2>
        
        <p className={styles.welcomeText}>
          Willkommen bei der Höllenreiner A.G., Ihrem vertrauenswürdigen Partner für den seriösen Ankauf von Edelmetallen, 
          Antiquitäten und historischen Sammlerstücken. Mit einem geschulten Blick für Wert und Geschichte helfen wir Ihnen, 
          echte Schätze zu erkennen. Diskret, zuverlässig und stets mit fairer Bewertung.
        </p>

        {/* NEU: Die Trust-Elemente mit Animation */}
        <motion.div 
          className={styles.trustSection}
          initial={{ opacity: 0, y: 30 }} // Startet unsichtbar und etwas tiefer
          whileInView={{ opacity: 1, y: 0 }} // Fährt hoch und wird sichtbar
          viewport={{ once: true }} // Nur einmal animieren
          transition={{ duration: 0.8, delay: 0.2 }} // Langsam und elegant
        >
          
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💎</span>
            <span className={styles.trustTitle}>Faire Bewertung</span>
            <p className={styles.trustText}>Wir garantieren marktgerechte Preise basierend auf aktuellen Edelmetallkursen und Sammlerwert.</p>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span className={styles.trustTitle}>Sofortige Auszahlung</span>
            <p className={styles.trustText}>Unkomplizierte Abwicklung. Erhalten Sie Ihr Geld sofort in bar oder per Echtzeit-Überweisung.</p>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            <span className={styles.trustTitle}>100% Diskret</span>
            <p className={styles.trustText}>Seriöse Abwicklung in geschützter Atmosphäre. Ihre Privatsphäre hat für uns oberste Priorität.</p>
          </div>

        </motion.div>

      </div>
    </>
  );
}