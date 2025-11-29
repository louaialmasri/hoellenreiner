import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Leistungen.module.css';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox'; 

// Bilder
const IMG_ANTIK_SCHMUCK = '/service-antikschmuck.jpeg';
const IMG_GOLD_SCHMUCK = '/service-goldschmuck.jpeg';
const IMG_MUENZEN = '/muenze.jpeg';
const IMG_NACHLASS = '/service-nachlass.jpeg';
// Platzhalter
const IMG_ZINN_ZAHN = '/service-goldschmuck.jpeg'; 
const IMG_MILITARIA = '/Wappen.png'; 

export default function Leistungen() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Head>
        <title>Leistungen - Höllenreiner A.G.</title>
      </Head>
      
      <Lightbox 
        selectedImage={selectedImg} 
        onClose={() => setSelectedImg(null)} 
      />

      {/* NEU: Der dunkle "Page Hero" Bereich */}
      {/* Das löst das Problem mit dem transparenten Header und der weißen Fläche */}
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Unsere Expertise</h1>
          <p>
            Wir widmen uns jedem Objekt mit der gebotenen Sorgfalt und Expertise. 
            Entdecken Sie unsere Fachbereiche.
          </p>
        </div>
      </div>

      <div className={`container ${styles.showcaseContainer}`}>
        
        {/* ... (Die Sektionen bleiben exakt gleich wie vorher) ... */}
        
        <Section 
          title="Antikschmuck & Historische Stücke"
          text="Wir kaufen hochwertigen Schmuck aus vergangenen Jahrhunderten, darunter Ringe, Broschen, Anhänger und kunstvoll gearbeitete Stücke mit historischem Charakter. Besonders interessieren uns handgefertigte Objekte mit kunsthistorischem Wert."
          img={IMG_ANTIK_SCHMUCK}
          alt="Antiker Schmuck"
          onImageClick={() => setSelectedImg({ src: IMG_ANTIK_SCHMUCK, alt: "Antiker Schmuck" })}
        />

        <Section 
          title="Gold- & Silberschmuck"
          text="Ob moderner Schmuck, historische Stücke oder beschädigte Einzelteile – Gold und Silber werden nach Feingehalt, Verarbeitung und Gewicht bewertet. Auch ungestempelte oder geerbte Schmuckstücke prüfen wir fachkundig in unserem Labor."
          img={IMG_GOLD_SCHMUCK}
          alt="Goldkette auf Maßband"
          onImageClick={() => setSelectedImg({ src: IMG_GOLD_SCHMUCK, alt: "Goldkette auf Maßband" })}
        />

        <Section 
          title="Gold- & Silbermünzen"
          text="Wir sind spezialisiert auf Numismatik. Wir kaufen einzelnes Münzmaterial ebenso wie komplette Sammlungen an – von klassischen Anlagemünzen bis hin zu raren historischen Prägungen (Kaiserreich, Antike). Zustand und Seltenheit bestimmen den Preis."
          img={IMG_MUENZEN}
          alt="Goldmünze"
          onImageClick={() => setSelectedImg({ src: IMG_MUENZEN, alt: "Goldmünze" })}
        />

        <Section 
          title="Zinn, Zahngold & Edelmetalle"
          text="Auch unscheinbare Reste können wertvoll sein. Wir analysieren und vergüten Zinngegenstände, Zahngold (auch mit Anhaftungen/Zähnen) sowie Bruchgold und Silberbesteck. Unsere modernen Analysemethoden garantieren eine exakte Wertermittlung für jede Legierung und Restbestände."
          img={IMG_ZINN_ZAHN}
          alt="Zahngold und Edelmetalle"
          onImageClick={() => setSelectedImg({ src: IMG_ZINN_ZAHN, alt: "Zahngold und Edelmetalle" })}
        />

        <Section 
          title="Militaria & Historische Zeitzeugen"
          text="Wir sind ständig auf der Suche nach militärischen Antiquitäten und Orden aus verschiedenen Epochen. Ob Uniformen, Dolche, Ausrüstungsgegenstände, Urkunden oder Ehrenzeichen – wir bewerten Ihre historischen Sammlerstücke mit fachmännischer Expertise und Diskretion."
          img={IMG_MILITARIA}
          alt="Militaria"
          onImageClick={() => setSelectedImg({ src: IMG_MILITARIA, alt: "Militaria" })}
        />

        <Section 
          title="Nachlässe & Sammlungen"
          text="Sie möchten einen kompletten Nachlass oder eine Sammlung auflösen? Wir übernehmen die sorgfältige Sortierung, Analyse und Bewertung aller Wertgegenstände vor Ort – transparent, professionell und diskret. Ideal bei Haushaltsauflösungen oder Erbangelegenheiten."
          img={IMG_NACHLASS}
          alt="Antike Kommode"
          onImageClick={() => setSelectedImg({ src: IMG_NACHLASS, alt: "Antike Kommode" })}
        />

      </div>
    </>
  );
}

function Section({ title, text, img, alt, onImageClick }) {
  return (
    <motion.div 
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className={styles.imageWrapper} 
        onClick={onImageClick}
        style={{ cursor: 'zoom-in' }} 
      >
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