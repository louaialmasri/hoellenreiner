import Head from 'next/head';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Höllenreiner A.G.</title>
      </Head>
      <div className="container">
        <h1>Impressum</h1>
        <p>
          [Hier müssen deine offiziellen Impressumsdaten hin.]
        </p>
        <p>
          Höllenreiner A.G.<br />
          Vertreten durch: [Geschäftsführer/Vorstand]<br />
          [Straße, Hausnummer]<br />
          [PLZ, Ort]<br />
        </p>
        <p>
          Telefon: 0176 88312191<br />
          E-Mail: angelo.h.1998@outlook.de
        </p>
        <p>
          Registergericht: [Amtsgericht...]<br />
          Registernummer: [HRB ...]<br />
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
          [DE...]
        </p>
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
          [Name, Anschrift]
        </p>
      </div>
    </>
  );
}