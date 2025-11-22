import '../styles/globals.css';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// 1. Schriften importieren
import { Cormorant_Garamond, Lato } from 'next/font/google';

// 2. Schriften konfigurieren
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif', // Wir machen sie als CSS-Variable verfügbar
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pageVariants = {
    initial: { opacity: 0, y: 5 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -5 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3,
  };

  return (
    // 3. Die Schrift-Variablen in den Main-Container injizieren
    <div className={`${cormorant.variable} ${lato.variable}`}>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}