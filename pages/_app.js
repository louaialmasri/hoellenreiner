import '../styles/globals.css';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 5, // Leichte "slide-up" Bewegung
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -5, // Leichte "slide-down" Bewegung
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate', // Eine sanfte "ease-in-out" Kurve
    duration: 0.3, // 0.3 Sekunden Dauer
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route} // Wichtig, damit AnimatePresence die Seitenänderung erkennt
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
  );
}