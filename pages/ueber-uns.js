import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/UeberUns.module.css';

const IMG_WAAGE_1 = '/waage-1.jpeg';
const IMG_WAAGE_2 = '/waage-2.jpeg';

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über Uns - Höllenreiner A.G.</title>
      </Head>
      <div className="container">
        <h1>Warum an Höllenreiner verkaufen?</h1>

        <div className={styles.containerFlex}>
          <div className={styles.textSection}>
            <p>
              Die Höllenreiner A.G. verbindet langjährige Erfahrung im Umgang mit Edelmetallen, Antikschmuck und historischen 
              Wertgegenständen mit einem hohen Anspruch an Seriosität und Fachwissen. Jede Einwertung erfolgt transparent, 
              nachvollziehbar und nach aktuellen Marktstandards, sodass Sie stets sicher sein können, einen fairen Preis zu erhalten.
            </p>
            <p>
              Ob Einzelstück, Erbstück oder umfangreiche Sammlung – wir behandeln jedes Objekt mit der gebotenen Sorgfalt und 
              dem Respekt, den seine Geschichte verdient. Diskretion, Zuverlässigkeit und ehrliche Beratung sind für uns selbstverständlich.
            </p>
          </div>
          <div className={styles.imageSection}>
            <Image src={IMG_WAAGE_1} alt="Transparente Bewertung Waage" width={350} height={250} className={styles.waageImage} />
            <Image src={IMG_WAAGE_2} alt="Fachkundige Bewertung Gold" width={350} height={250} className={styles.waageImage} />
          </div>
        </div>
      </div>
    </>
  );
}