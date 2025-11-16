import Head from 'next/head';
import Image from 'next/image';

// NEUE DATEINAMEN
const IMG_WAAGE_1 = '/waage-1.jpg';
const IMG_WAAGE_2 = '/waage-2.jpg';

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über Uns - Höllenreiner A.G.</title>
      </Head>
      <div className="container">
        <h1>Warum an Höllenreiner verkaufen?</h1>

        <div style={styles.containerFlex}> {/* Umbenannt von 'container' zu 'containerFlex' um Konflikte zu vermeiden */}
          <div style={styles.textSection}>
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
          <div style={styles.imageSection}>
            {/* KORRIGIERTE IMAGE SYNTAX */}
            <Image src={IMG_WAAGE_1} alt="Transparente Bewertung Waage" width={350} height={250} style={styles.waageImage} />
            <Image src={IMG_WAAGE_2} alt="Fachkundige Bewertung Gold" width={350} height={250} style={{...styles.waageImage, marginTop: '20px'}} />
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  containerFlex: {
    display: 'flex',
    gap: '40px',
    marginTop: '40px',
  },
  textSection: {
    flex: 2,
  },
  imageSection: {
    flex: 1,
  },
  // NEUES Style-Objekt für die Bilder
  waageImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '3px solid var(--color-gold-dark)',
  }
};