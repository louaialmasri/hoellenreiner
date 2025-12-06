import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css'; // Importiert das CSS Modul
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}> {/* Wendet die CSS-Klasse an */}
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}