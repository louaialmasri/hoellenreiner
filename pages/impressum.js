import Head from 'next/head';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Höllenreiner A.G.</title>
      </Head>
      
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Impressum</h1>
        </div>
      </div>
      
      <div className="container" style={{marginBottom: '80px'}}>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Höllenreiner A.G.</strong><br />
          (Einzelunternehmen, Reisegewerbe)<br />
          Inhaber: Angelo Höllenreiner<br />
          <br />
          {/* ACHTUNG: Hier Ihre echte Wohnanschrift eintragen! */}
          Mozartstraße 19<br />
          85057 Ingolstadt
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0176 88312191<br />
          E-Mail: angelo.h.1998@outlook.de
        </p>

        <h2>Umsatzsteuer</h2>
        <p>
          Es wird keine Umsatzsteuer berechnet, da wir als Kleinunternehmer gemäß § 19 UStG von der Umsatzsteuer befreit sind.
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          Angelo Höllenreiner<br />
          [Adresse wie oben]
        </p>

        <h2>Gewerberechtliche Angaben</h2>
        <p>
          Reisegewerbekarte erteilt durch:<br />
          {/* Hier das zuständige Amt eintragen */}
          [Stadt Ingolstadt - Ordnungsamt]<br />
          [Adresse der Behörde]
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <br />
          <a href="https://consumer-redress.ec.europa.eu/index_de" target="_blank" rel="noopener noreferrer">
            https://consumer-redress.ec.europa.eu/index_de
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Bildnachweise</h2>
        <p>
          Quelle der verwendeten Bilder und Grafiken:<br />
          Eigene Aufnahmen<br />
          Sowie lizenzfreie Bilder von Unsplash.com
        </p>
      </div>
    </>
  );
}