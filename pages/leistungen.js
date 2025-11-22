import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Leistungen.module.css';
import { motion } from 'framer-motion'; // Wir nutzen Animationen für das "Reinfliegen"

// Bilder
const IMG_ANTIK_SCHMUCK = '/service-antikschmuck.jpeg';
const IMG_GOLD_SCHMUCK = '/service-goldschmuck.jpeg';
const IMG_MUENZEN = '/muenze.jpeg';
const IMG_NACHLASS = '/service-nachlass.jpeg';

export default function Leistungen() {
  return (
    <>
      <Head>
        <title>Leistungen - Höllenreiner A.G.</title>
      </Head>
      
      {/* Kleiner Intro-Container */}
      <div className="container" style={{textAlign: 'center', paddingTop: '40px'}}>
        <h1>Unsere Expertise</h1>
        <p style={{margin: '0 auto'}}>
          Wir widmen uns jedem Objekt mit der gebotenen Sorgfalt und Expertise. 
          Entdecken Sie unsere Fachbereiche.
        </p>
      </div>

      <div className={`container ${styles.showcaseContainer}`}>
        
        {/* Abschnitt 1: Antikschmuck */}
        <Section 
          title="Antikschmuck & Historische Stücke"
          text="Wir kaufen hochwertigen Schmuck aus vergangenen Jahrhunderten, darunter Ringe, Broschen, Anhänger und kunstvoll gearbeitete Stücke mit historischem Charakter. Besonders interessieren uns handgefertigte Objekte mit kunsthistorischem Wert."
          img={IMG_ANTIK_SCHMUCK}
          alt="Antiker Schmuck"
        />

        {/* Abschnitt 2: Gold & Silber */}
        <Section 
          title="Gold- & Silberschmuck"
          text="Ob moderner Schmuck, historische Stücke oder beschädigte Einzelteile – Gold und Silber werden nach Feingehalt, Verarbeitung und Gewicht bewertet. Auch ungestempelte oder geerbte Schmuckstücke prüfen wir fachkundig in unserem Labor."
          img={IMG_GOLD_SCHMUCK}
          alt="Goldkette auf Maßband"
        />

        {/* Abschnitt 3: Münzen */}
        <Section 
          title="Gold- & Silbermünzen"
          text="Wir sind spezialisiert auf Numismatik. Wir kaufen einzelnes Münzmaterial ebenso wie komplette Sammlungen an – von klassischen Anlagemünzen bis hin zu raren historischen Prägungen (Kaiserreich, Antike). Zustand und Seltenheit bestimmen den Preis."
          img={IMG_MUENZEN}
          alt="Goldmünze"
        />

        {/* Abschnitt 4: Nachlässe */}
        <Section 
          title="Nachlässe & Sammlungen"
          text="Sie möchten einen kompletten Nachlass oder eine Sammlung auflösen? Wir übernehmen die sorgfältige Sortierung, Analyse und Bewertung aller Wertgegenstände vor Ort – transparent, professionell und diskret. Ideal bei Haushaltsauflösungen oder Erbangelegenheiten."
          img={IMG_NACHLASS}
          alt="Antike Kommode"
        />

      </div>
    </>
  );
}

// Eine kleine Hilfs-Komponente, um den Code sauber zu halten
// Sie animiert sich selbst beim Scrollen (Viewport)
function Section({ title, text, img, alt }) {
  return (
    <motion.div 
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.imageWrapper}>
        <Image src={img} alt={alt} width={600} height={400} className={styles.serviceImage} />
      </div>
      <div className={styles.textContent}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/kontakt" className={styles.ctaButton}>
          Kostenlose Bewertung anfragen
        </Link>
      </div>
    </motion.div>
  );
}