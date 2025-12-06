import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    q: "Kaufen Sie auch kleine Mengen oder beschädigten Schmuck?",
    a: "Ja, absolut. Wir kaufen auch Bruchgold, einzelne Ohrringe oder Zahngold. Jedes Gramm zählt und wird zum aktuellen Tageskurs vergütet."
  },
  {
    q: "Ist der Hausbesuch wirklich kostenlos?",
    a: "Ja. Die Anfahrt und die Bewertung sind für Sie 100% kostenlos und unverbindlich. Sie entscheiden frei, ob Sie verkaufen möchten."
  },
  {
    q: "Muss ich meine Antiquitäten vorher reinigen?",
    a: "Bitte nicht! Gerade bei Münzen, Militaria oder altem Silber ist die 'Patina' (die natürliche Alterung) oft wertsteigernd. Eine unsachgemäße Reinigung kann den Wert massiv mindern. Zeigen Sie uns die Stücke im Fundzustand."
  },
  {
    q: "Wie läuft die Bezahlung ab?",
    a: "Wir zahlen in der Regel sofort in bar aus. Auf Wunsch ist auch eine Sofort-Überweisung möglich, die noch während des Termins auf Ihrem Konto gutgeschrieben wird."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '100px', marginBottom: '100px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Häufig gestellte Fragen</h2>
      
      {questions.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #e0d5c5', marginBottom: '10px' }}>
          <button
            onClick={() => toggle(index)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-serif)'
            }}
          >
            {item.q}
            <span style={{ color: 'var(--color-gold-dark)', fontSize: '1.5rem' }}>
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ paddingBottom: '20px', color: '#666', lineHeight: '1.6' }}>
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}