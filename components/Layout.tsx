import { useEffect } from 'react';

import Footer from './Footer';

import styles from '@styles/Layout.module.scss';
import Navbar from './Navbar';

interface layoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: layoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.darkness}></div>

      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
