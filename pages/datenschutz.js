import Head from 'next/head';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutz - Höllenreiner A.G.</title>
      </Head>
      
      <div className="subPageHero">
        <div className="container" style={{padding: 0}}>
          <h1>Datenschutzerklärung</h1>
        </div>
      </div>

      <div className="container" style={{marginBottom: '80px'}}>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <p>
          <strong>Netlify</strong><br/>
          Netlify, Inc., 44 Montgomery Street, Suite 300<br/>
          San Francisco, California 94104, USA<br/>
        </p>
        <p>
          <strong>Art und Zweck der Verarbeitung:</strong><br/>
          Netlify verarbeitet Daten (z. B. IP-Adressen, Server-Logfiles), um die technische Auslieferung der Website zu ermöglichen und Sicherheitsangriffe abzuwehren.
          Diese Daten werden direkt beim Aufruf unserer Website durch Ihren Browser an die Server von Netlify übermittelt.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Verantwortliche Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/>
          <br/>
          Angelo Höllenreiner<br />
          Mozartstraße 19<br />
          85057 Ingolstadt<br />
          <br />
          Telefon: 0176 88312191<br />
          E-Mail: angelo.h.1998@outlook.de
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular & E-Mail-Kontakt</h3>
        <p>
          Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
          inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Nachricht, ggf. hochgeladene Fotos von Wertgegenständen) 
          zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
        </p>
        <p>
          Da wir ein Reisegewerbe betreiben, nutzen wir Ihre Daten (insbesondere Adresse oder Telefonnummer, falls angegeben) auch, 
          um ggf. einen Besichtigungstermin vor Ort mit Ihnen zu vereinbaren.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der 
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (z.B. Bewertung eines Objekts) erforderlich ist. 
          In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
          Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
          abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h3>Google Fonts (Lokales Hosting)</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts. 
          Die Google Fonts sind lokal auf unserem Server installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
        </p>
      </div>
    </>
  );
}