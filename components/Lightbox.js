import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
          onClick={onClose} // Klick auf Hintergrund schließt
          style={styles.overlay}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={styles.imageContainer}
            onClick={(e) => e.stopPropagation()} // Klick auf Bild schließt NICHT
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1000}
              height={800}
              style={styles.image}
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
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Sehr dunkler Hintergrund
    backdropFilter: 'blur(5px)', // Milchglas im Hintergrund
    zIndex: 2000, // Über dem Header!
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    cursor: 'zoom-out',
  },
  imageContainer: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    border: '1px solid var(--color-gold-dark)',
    cursor: 'default',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(0,0,0,0.5)',
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
  }
};