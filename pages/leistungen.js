import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Leistungen.module.css';

// KORRIGIERTE DATEINAMEN
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
      <div className="container">
        <h1>Unsere Leistungen</h1>
        <p>Wir sind spezialisiert auf den fachkundigen Ankauf einer Vielzahl von Wertgegenständen.</p>

        <div className={styles.grid}>
          <div className={styles.serviceBox}>
            <Image src={IMG_ANTIK_SCHMUCK} alt="Antikschmuck" width={400} height={300} className={styles.serviceImage} />
            <h2>Antikschmuck</h2>
            <p>Wir kaufen hochwertigen Schmuck aus vergangenen Jahrhunderten, darunter Ringe, Broschen, Anhänger und kunstvoll gearbeitete Stücke mit historischem Charakter. Besonders interessieren uns handgefertigte Objekte mit kunsthistorischem oder materiellem Wert.</p>
          </div>

          <div className={styles.serviceBox}>
            <Image src={IMG_GOLD_SCHMUCK} alt="Gold- & Silberschmuck" width={400} height={300} className={styles.serviceImage} />
            <h2>Gold- & Silberschmuck</h2>
            <p>Ob moderner Schmuck, historische Stücke oder beschädigte Einzelteile – Gold und Silber werden nach Feingehalt, Verarbeitung und Gewicht bewertet. Auch ungestempelte oder geerbte Schmuckstücke prüfen wir fachkundig.</p>
          </div>

          <div className={styles.serviceBox}>
            <Image src={IMG_MUENZEN} alt="Gold- & Silbermünzen" width={400} height={300} className={styles.serviceImage} />
            <h2>Gold- & Silbermünzen</h2>
            <p>Wir kaufen einzelnes Münzmaterial ebenso wie komplette Sammlungen an – von klassischen Anlagemünzen bis hin zu raren historischen Prägungen. Zustand, Seltenheit und Edelmetallgehalt fließen in die Bewertung ein.</p>
          </div>

          <div className={styles.serviceBox}>
            <Image src={IMG_NACHLASS} alt="Nachlässe & Sammlungen" width={400} height={300} className={styles.serviceImage} />
            <h2>Nachlässe & Sammlungen</h2>
            <p>Sie möchten einen kompletten Nachlass oder eine Sammlung auflösen? Wir übernehmen die sorgfältige Sortierung, Analyse und Bewertung aller Wertgegenstände – transparent, professionell und ohne Aufwand für Sie. Ideal bei Haushaltsauflösungen oder Erbangelegenheiten.</p>
          </div>
        </div>
      </div>
    </>
  );
}