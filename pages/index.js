import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Importiert das CSS Modul

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
          style={{ objectFit: 'cover' }} // 'objectFit' muss hier bleiben
          priority // 'priority' ist hier WICHTIG für schnelles Laden (LCP)
        />
        <div className={styles.heroContent}>
          <h1>WERTE WAHREN, SCHÄTZE ERKENNEN</h1>
        </div>
      </div>

      {/* Nutzt die globale .container Klasse für konsistentes Layout */}
      <div className={`container ${styles.welcome}`}>
        <h2>Willkommen bei der Höllenreiner A.G.</h2>
        <p className={styles.welcomeText}>
          Willkommen bei der Höllenreiner A.G., Ihrem vertrauenswürdigen Partner für den seriösen Ankauf von Edelmetallen, 
          Antiquitäten und historischen Sammlerstücken. Mit einem geschulten Blick für Wert und Geschichte helfen wir Ihnen, 
          echte Schätze zu erkennen. Diskret, zuverlässig und stets mit fairer Bewertung.
        </p>
      </div>
    </>
  );
}