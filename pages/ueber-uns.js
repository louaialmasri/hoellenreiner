import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/UeberUns.module.css';
import { motion } from 'framer-motion';

// Bilder
const IMG_WAAGE_1 = '/waage-1.jpeg';
const IMG_WAAGE_2 = '/waage-2.jpeg';
const IMG_WAPPEN = '/Wappen1.png'; 

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über Uns & Historie - Höllenreiner A.G.</title>
      </Head>
      
      <div className="container">
        <div className={styles.pageWrapper}>

          {/* SEKTION 1: Die Moderne (Warum verkaufen?) */}
          <motion.div 
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.textColumn}>
              <span className={styles.subline}>Kompetenz & Fairness</span>
              <h1>Warum an Höllenreiner verkaufen?</h1>
              <p>
                Die Höllenreiner A.G. verbindet langjährige Erfahrung im Umgang mit Edelmetallen, Antikschmuck und historischen 
                Wertgegenständen mit einem hohen Anspruch an Seriosität und Fachwissen. 
              </p>
              <p>
                Jede Einwertung erfolgt <strong>transparent, nachvollziehbar und nach aktuellen Marktstandards</strong>, 
                sodass Sie stets sicher sein können, einen fairen Preis zu erhalten. Ob Einzelstück, Erbstück oder umfangreiche 
                Sammlung – wir behandeln jedes Objekt mit der gebotenen Sorgfalt und dem Respekt, den seine Geschichte verdient.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <Image src={IMG_WAAGE_1} alt="Transparente Bewertung Waage" width={400} height={300} className={styles.image} />
              <Image src={IMG_WAAGE_2} alt="Fachkundige Bewertung Gold" width={400} height={300} className={styles.image} />
            </div>
          </motion.div>

          {/* SEKTION 2: Die Historie (Das Wappen) */}
          <motion.div 
            className={`${styles.section} ${styles.sectionReverse}`} // Dreht das Layout um
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.textColumn}>
              <span className={styles.subline}>Tradition seit 1438</span>
              <h1>Ein Name mit Geschichte</h1>
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
              <small style={{color: '#888', fontSize: '0.8rem'}}>Verliehen von Kaiser Albrecht II., Regensburg 1438</small>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}