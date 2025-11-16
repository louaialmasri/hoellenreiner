import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css'; // Importiert das CSS Modul

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}> {/* Wendet die CSS-Klasse an */}
        {children}
      </main>
      <Footer />
    </>
  );
}