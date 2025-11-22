import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

const BANNER_FILE = '/gemini.png';

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
          // HIER IST DER TRICK:
          // objectFit: 'cover' -> Füllt alles aus (keine Ränder)
          // objectPosition: '30% center' ->  Fokussiert etwas links von der Mitte (wo das Wappen ist)
          style={{ objectFit: 'cover', objectPosition: '30% center' }} 
          priority 
        />
        <div className={styles.heroContent}>
          {/* Wir nutzen motion für ein sanftes Einblenden des Textes */}
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WERTE WAHREN,<br />SCHÄTZE ERKENNEN
          </motion.h1>
        </div>
      </div>

      <div className={`container ${styles.welcome}`}>
        <h2>Willkommen bei der Höllenreiner A.G.</h2>
        
        <p className={styles.welcomeText}>
          Willkommen bei der Höllenreiner A.G., Ihrem vertrauenswürdigen Partner für den seriösen Ankauf von Edelmetallen, 
          Antiquitäten und historischen Sammlerstücken. Mit einem geschulten Blick für Wert und Geschichte helfen wir Ihnen, 
          echte Schätze zu erkennen. Diskret, zuverlässig und stets mit fairer Bewertung.
        </p>

        <motion.div 
          className={styles.trustSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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