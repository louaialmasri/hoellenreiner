import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PurchaseAssistant.module.css';

export default function PurchaseAssistant() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    image: null,
    contactType: '', // 'whatsapp' oder 'email'
    contactValue: ''
  });

  const handleCategory = (cat) => {
    setFormData({ ...formData, category: cat });
    setStep(2);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setStep(3);
      };
      reader.readAsDataURL(file);
    } else {
      setStep(3); // Überspringen
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hier würde der API-Aufruf an /api/kontakt folgen
    // Wir simulieren den Erfolg für die UX
    setStep(4);
  };

  // Animationseinstellungen
  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className={styles.assistantContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${step * 25}%` }}></div>
      </div>

      <AnimatePresence mode='wait'>
        
        {/* SCHRITT 1: KATEGORIE */}
        {step === 1 && (
          <motion.div key="step1" variants={variants} initial="enter" animate="center" exit="exit" className={styles.stepContent}>
            <h3>Was möchten Sie verkaufen?</h3>
            <div className={styles.grid}>
              <button onClick={() => handleCategory('Schmuck')} className={styles.card}>
                <span className={styles.icon}>💍</span> Altgold & Schmuck
              </button>
              <button onClick={() => handleCategory('Münzen')} className={styles.card}>
                <span className={styles.icon}>🪙</span> Münzen
              </button>
              <button onClick={() => handleCategory('Zahngold')} className={styles.card}>
                <span className={styles.icon}>🦷</span> Zahngold
              </button>
              <button onClick={() => handleCategory('Sonstiges')} className={styles.card}>
                <span className={styles.icon}>🏺</span> Antiquitäten / Sonstiges
              </button>
            </div>
          </motion.div>
        )}

        {/* SCHRITT 2: FOTO */}
        {step === 2 && (
          <motion.div key="step2" variants={variants} initial="enter" animate="center" exit="exit" className={styles.stepContent}>
            <h3>Haben Sie ein Foto? (Optional)</h3>
            <p>Ein Bild hilft uns für eine erste Einschätzung.</p>
            
            <label className={styles.uploadButton}>
              📷 Foto hochladen
              <input type="file" accept="image/*" onChange={handleFileChange} hidden />
            </label>
            
            <button onClick={() => setStep(3)} className={styles.skipButton}>
              Überspringen
            </button>
          </motion.div>
        )}

        {/* SCHRITT 3: KONTAKT */}
        {step === 3 && (
          <motion.div key="step3" variants={variants} initial="enter" animate="center" exit="exit" className={styles.stepContent}>
            <h3>Wie dürfen wir Sie kontaktieren?</h3>
            <div className={styles.contactOptions}>
              <button 
                className={styles.whatsappBtn}
                onClick={() => window.open(`https://wa.me/4917688312191?text=Ich habe ${formData.category} zu verkaufen.`, '_blank')}
              >
                💬 Direkt per WhatsApp chatten
              </button>
              
              <div className={styles.divider}>ODER</div>

              <form onSubmit={handleSubmit} className={styles.miniForm}>
                <input 
                  type="text" 
                  placeholder="Ihre Telefonnummer oder E-Mail" 
                  required 
                  className={styles.input}
                  onChange={(e) => setFormData({...formData, contactValue: e.target.value})}
                />
                <button type="submit" className={styles.submitBtn}>Anfrage absenden</button>
              </form>
            </div>
          </motion.div>
        )}

        {/* SCHRITT 4: ERFOLG */}
        {step === 4 && (
          <motion.div key="step4" variants={variants} initial="enter" animate="center" exit="exit" className={styles.stepContent}>
            <span style={{fontSize: '3rem'}}>✅</span>
            <h3>Vielen Dank!</h3>
            <p>Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.</p>
            <button onClick={() => setStep(1)} className={styles.skipButton}>Neue Anfrage</button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}