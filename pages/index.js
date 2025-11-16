import Head from 'next/head';
import Image from 'next/image';

// NEUER DATEINAME
const BANNER_FILE = '/banner-home.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Höllenreiner A.G. - Werte wahren, Schätze erkennen</title>
        <meta name="description" content="Ihr Partner für den Ankauf von Edelmetallen, Antiquitäten und Sammlerstücken." />
      </Head>
      
      <div style={styles.hero}>
        {/* KORRIGIERTE IMAGE SYNTAX (mit 'fill' und 'style') */}
        <Image 
          src={BANNER_FILE} 
          alt="Höllenreiner A.G. Banner" 
          fill // Sagt dem Bild, den Container zu füllen
          style={{ objectFit: 'cover' }} // 'objectFit' kommt jetzt ins style-Objekt
          priority // Wichtig für das erste Bild auf der Seite
        />
        <div style={styles.heroContent}>
          <h1>WERTE WAHREN, SCHÄTZE ERKENNEN</h1>
        </div>
      </div>

      <div className="container" style={styles.welcome}>
        <h2>Willkommen bei der Höllenreiner A.G.</h2>
        <p>
          Willkommen bei der Höllenreiner A.G., Ihrem vertrauenswürdigen Partner für den seriösen Ankauf von Edelmetallen, 
          Antiquitäten und historischen Sammlerstücken. Mit einem geschulten Blick für Wert und Geschichte helfen wir Ihnen, 
          echte Schätze zu erkennen. Diskret, zuverlässig und stets mit fairer Bewertung.
        </p>
      </div>
    </>
  );
}

// Styles... (Rest bleibt gleich)
const styles = {
  hero: {
    position: 'relative',
    height: '400px',
    width: '100%',
  },
  // 'heroImage' style ist jetzt direkt im <Image> Tag (siehe 'style={{...}}')
  heroContent: {
    position: 'relative',
    zIndex: 2, // Stellt sicher, dass der Text über dem Bild liegt
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    padding: '20px',
    color: '#fff', // Sicherstellen, dass Text lesbar ist
    textShadow: '0 0 10px rgba(0,0,0,0.7)', // Schatten für Lesbarkeit
  },
  welcome: {
    textAlign: 'center',
    paddingTop: '40px',
  }
};