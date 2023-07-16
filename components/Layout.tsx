import { useEffect } from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';

import styles from '../styles/Layout.module.scss';

interface layoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: layoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.darkness}></div>

      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
