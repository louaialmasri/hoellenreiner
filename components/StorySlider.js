import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StorySlider.module.css';

// hochgeladenen Bilder
const STORIES = [
  {
    img: '/WhatsApp Image 2025-11-14 at 11.11.19.jpeg',
    title: "Goldmünze 'Deutsches Reich'",
    text: "Herr K. fand diese Münze im Nachlass seines Vaters. Er schätzte den Wert auf 100€. Unsere Analyse bestätigte eine seltene Prägung.",
    price: "Ankaufspreis: 450 €"
  },
  {
    img: '/WhatsApp Image 2025-11-14 at 11.11.20.jpeg',
    title: "Konvolut alter Ringe",
    text: "Eine Kundin aus Ingolstadt wollte ihren ungetragenen Schmuck aussortieren. Viele Stücke waren defekt, aber das Material war hochwertig.",
    price: "Ankaufspreis: 1.280 €"
  },
  {
    img: '/WhatsApp Image 2025-11-14 at 11.11.20 (6).jpeg',
    title: "Massives Goldarmband",
    text: "Dieses schwere Stück sollte eigentlich eingeschmolzen werden. Wir erkannten die feine Handarbeit und vergüteten über dem reinen Materialwert.",
    price: "Ankaufspreis: 2.150 €"
  }
];

export default function StorySlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % STORIES.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Geschichten hinter den Werten</h2>
      
      <div className={styles.sliderWrapper}>
        {/* BUTTON LINKS (Pfeil zurück) */}
        <button onClick={prevSlide} className={styles.navButton} aria-label="Vorherige Geschichte">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className={styles.slideContent}>
          <AnimatePresence mode='wait'>
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={STORIES[index].img} 
                  alt={STORIES[index].title} 
                  fill 
                  style={{objectFit: 'cover'}}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{STORIES[index].title}</h3>
                <p className={styles.description}>{STORIES[index].text}</p>
                <div className={styles.priceTag}>{STORIES[index].price}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BUTTON RECHTS (Pfeil vor) */}
        <button onClick={nextSlide} className={styles.navButton} aria-label="Nächste Geschichte">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}