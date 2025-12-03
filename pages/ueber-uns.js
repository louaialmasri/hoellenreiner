import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/UeberUns.module.css';
import { motion } from 'framer-motion';

// Bilder
const IMG_WAPPEN = '/Wappen1.png'; 

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über Uns & Historie - Höllenreiner A.G.</title>
      </Head>
      
      {/* Page Hero */}
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Über Uns & Historie</h1>
          <p>
            Tradition, die verpflichtet. Kompetenz, die überzeugt.
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className={styles.pageWrapper}>

          {/* TEIL 1: Die Frage (Zentriert, ohne Bilder) */}
          <motion.div 
            className={styles.introSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.subline}>Kompetenz & Fairness</span>
            <h2>Warum an Höllenreiner verkaufen?</h2>
            
            <p>
              Die Höllenreiner A.G. verbindet langjährige Erfahrung im Umgang mit Edelmetallen, 
              Antikschmuck und historischen Wertgegenständen mit einem hohen Anspruch an Seriosität.
            </p>
            <p>
              Unsere Antwort auf die Frage nach dem "Warum" ist einfach: Weil wir nicht nur Händler sind, 
              sondern Bewahrer von Werten. Jede Einwertung erfolgt transparent und respektvoll – 
              denn unsere heutige Arbeitsweise fußt auf einem Fundament, das Jahrhunderte überdauert hat.
            </p>
          </motion.div>

          {/* Die visuelle Verbindungslinie */}
          <motion.div 
            className={styles.connector}
            initial={{ height: 0 }}
            whileInView={{ height: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>

          {/* TEIL 2: Die Antwort (Das Wappen) */}
          <motion.div 
            className={styles.historySection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.textColumn}>
              <span className={styles.subline}>Die Antwort: Tradition seit 1438</span>
              <h2>Ein Name mit Geschichte</h2>
              <p>
                Seriosität hat bei uns Tradition. Das Geschlecht der Höllenreiner wird bereits im <strong>14. Jahrhundert</strong> urkundlich nachgewiesen.
              </p>
              <p>
                Unser traditionelles Familienwappen wurde im Jahre <strong>1438 von Kaiser Albrecht II.</strong> zu Regensburg verliehen. 
                Diese jahrhundertelange Geschichte ist für uns nicht nur Stolz, sondern Verpflichtung: Wir führen unsere Geschäfte 
                nach den alten Werten des ehrbaren Kaufmanns – mit Handschlagqualität, Ehre und Aufrichtigkeit.
              </p>
            </div>
            
            <div className={styles.imageColumn}>
              <Image 
                src={IMG_WAPPEN} 
                alt="Familienwappen Höllenreiner seit 1438" 
                width={400} 
                height={500} 
                className={styles.wappenImage} 
              />
              <small style={{color: '#888', fontSize: '0.8rem', marginTop: '10px', display: 'block'}}>Verliehen von Kaiser Albrecht II., Regensburg 1438</small>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}