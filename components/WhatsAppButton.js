import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/4917688312191?text=Hallo,%20Höllenreiner%20AG,%20ich%20habe%20eine%20Anfrage."
      target="_blank"
      aria-label="Kontakt per WhatsApp"
    >
      <motion.div 
        style={styles.button}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* WhatsApp Icon als SVG */}
        <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.112 14.201 15.344 13.332 15.013 13.242C14.682 13.152 14.441 13.107 14.201 13.468C13.961 13.828 13.269 14.639 13.059 14.879C12.848 15.12 12.638 15.15 12.278 14.969C11.918 14.789 10.758 14.409 9.382 13.184C8.286 12.208 7.546 11.002 7.336 10.641C7.126 10.281 7.313 10.086 7.493 9.907C7.654 9.747 7.851 9.49 8.031 9.28C8.211 9.07 8.271 8.92 8.391 8.68C8.512 8.439 8.452 8.229 8.361 8.049C8.271 7.869 7.55 6.096 7.25 5.375C6.958 4.674 6.664 4.769 6.439 4.769H5.733C5.493 4.769 5.102 4.859 4.772 5.219C4.441 5.58 3.5 6.466 3.5 8.268C3.5 10.07 4.817 11.812 5.012 12.068C5.207 12.323 7.625 16.038 11.312 17.629C14.999 19.219 14.999 18.739 15.66 18.679C16.32 18.619 17.788 17.808 18.088 16.967C18.389 16.126 18.389 15.405 18.299 15.255C18.209 15.105 17.969 15.015 17.608 14.835H17.472V14.382Z" />
        </svg>
      </motion.div>
    </Link>
  );
}

const styles = {
  button: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 9999,
    backgroundColor: '#25D366',
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    cursor: 'pointer',
  }
};