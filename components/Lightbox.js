import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Lightbox({ selectedImage, onClose }) {
  // Verhindert das Scrollen der Hauptseite, wenn Lightbox offen ist
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} 
          style={styles.overlay}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={styles.imageContainer}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* HIER IST DIE ÄNDERUNG: */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill // WICHTIG: Füllt den Container automatisch
              style={{ objectFit: 'contain' }} // Zeigt IMMER das ganze Bild (nichts abgeschnitten)
              priority // Lädt sofort schnell
              sizes="90vw" // Optimierung für Browser
            />
            
            <button onClick={onClose} style={styles.closeButton}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.95)', // Noch etwas dunkler für besseren Kontrast
    backdropFilter: 'blur(5px)',
    zIndex: 2000, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    cursor: 'zoom-out',
  },
  imageContainer: {
    position: 'relative',
    // Wir geben dem Container eine feste Größe relativ zum Bildschirm
    // Das Bild füllt diesen Bereich dann mit "contain" aus
    width: '90vw',  
    height: '85vh', 
    maxWidth: '1200px', // Nicht breiter als das
    
    borderRadius: '8px',
    overflow: 'hidden',
    // Kein Rahmen hier nötig, sieht cleaner aus ohne, oder nur dezent:
    // border: '1px solid var(--color-gold-dark)', 
    cursor: 'default',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.2)', // Leicht transparent
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background 0.2s',
    zIndex: 10, // Über dem Bild
  }
};