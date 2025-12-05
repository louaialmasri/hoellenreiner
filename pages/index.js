import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';

const BANNER_FILE = '/banner.jpg';

const REFERENCE_IMAGES = [
  { src: '/WhatsApp Image 2025-11-14 at 11.11.19.jpeg', alt: 'Goldmünze Deutsches Reich' },
  { src: '/WhatsApp Image 2025-11-14 at 11.11.20.jpeg', alt: 'Konvolut Goldringe' },
  { src: '/WhatsApp Image 2025-11-14 at 11.11.20 (6).jpeg', alt: 'Massives Goldarmband' },
  { src: '/WhatsApp Image 2025-11-14 at 11.11.20 (1).jpeg', alt: 'Omega Vintage Uhr' },
];

export default function Home() {

  // State für das aktuell ausgewählte Bild
  const [selectedImg, setSelectedImg] = useState(null);

  // SEO-Daten für ein Reisegewerbe (Service Area Business)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Generischer lokaler Dienstleister
    "name": "Höllenreiner A.G.",
    "image": "https://www.hoellenreiner-ag.de/Wappen.png",
    "url": "https://www.hoellenreiner-ag.de",
    "telephone": "0176 88312191",
    "email": "angelo.h.1998@outlook.de",
    "priceRange": "$$$",
    // Adresse ohne Straße (nur Basis-Standort für Google)
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ingolstadt", //
      "postalCode": "85057",           //
      "addressCountry": "DE"
    },
    // Das Einzugsgebiet (Wichtig für Reisegewerbe!)
    "areaServed": {
      "@type": "Country",
      "name": "Germany" //
    },
    // Keine festen Öffnungszeiten, da Terminvereinbarung
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "00:00",
        "description": "Termine nach Vereinbarung"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Höllenreiner A.G. - Werte wahren, Schätze erkennen</title>
        <meta name="description" content="Ihr Partner für den Ankauf von Edelmetallen, Antiquitäten und Sammlerstücken. Seriös, diskret und fair. Hausbesuche nach Vereinbarung." />
        
        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Höllenreiner A.G. | Werte wahren, Schätze erkennen" />
        <meta property="og:description" content="Spezialisiert auf Antikschmuck, Gold, Münzen & Militaria. Faire Bewertung & Sofortige Auszahlung." />
        <meta property="og:image" content="https://www.hoellenreiner-ag.de/banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hoellenreiner-ag.de" />
        <meta property="og:locale" content="de_DE" />

        {/* Strukturierte Daten (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Die Lightbox Komponente wird hier eingebunden */}
      <Lightbox 
        selectedImage={selectedImg} 
        onClose={() => setSelectedImg(null)} 
      />
      
      <div className={styles.hero}>
        <Image 
          src={BANNER_FILE} 
          alt="Höllenreiner A.G. Banner" 
          fill 
          className={styles.bannerImage}
          quality={100} 
          priority 
        />
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.goldShimmer} 
          >
            WERTE WAHREN, <br/> SCHÄTZE ERKENNEN
          </motion.h1>
        </div>
      </div>

      <div className={`container ${styles.welcome}`}>
        <h2>Willkommen bei der Höllenreiner A.G.</h2>
        
        <p className={styles.welcomeText}>
          Willkommen bei der Höllenreiner A.G., Ihrem vertrauenswürdigen Partner für den seriösen Ankauf von Edelmetallen, 
          Antiquitäten und historischen Sammlerstücken. Als Reisegewerbe bieten wir Ihnen maximale Diskretion und Komfort: 
          Wir kommen zur Bewertung und Abwicklung direkt zu Ihnen.
        </p>

        <motion.div 
          className={styles.trustSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💎</span>
            <span className={styles.trustTitle}>Faire Bewertung</span>
            <p className={styles.trustText}>Wir garantieren marktgerechte Preise basierend auf aktuellen Edelmetallkursen und Sammlerwert.</p>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span className={styles.trustTitle}>Sofortige Auszahlung</span>
            <p className={styles.trustText}>Unkomplizierte Abwicklung. Erhalten Sie Ihr Geld sofort in bar oder per Echtzeit-Überweisung.</p>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            <span className={styles.trustTitle}>100% Diskret</span>
            <p className={styles.trustText}>Seriöse Abwicklung in geschützter Atmosphäre. Hausbesuche garantieren Ihre Privatsphäre.</p>
          </div>
        </motion.div>

        {/* --- ECHTE ANKÄUFE GALERIE --- */}
        <motion.div 
          className={styles.gallerySection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Aktuelle Ankäufe & Expertisen</h2>
          <p style={{ margin: '0 auto', maxWidth: '600px', color: '#666' }}>
            Ein Auszug aus Objekten, die wir kürzlich bewertet und angekauft haben. 
            Jedes Stück erzählt seine eigene Geschichte.
          </p>

          <div className={styles.galleryGrid}>
            {REFERENCE_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className={styles.galleryItem}
                // Klick-Event öffnet das Bild
                onClick={() => setSelectedImg(img)}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={400} 
                  height={400} 
                  className={styles.galleryImage}
                />
                <div className={styles.galleryLabel}>{img.alt}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
}