import { useEffect } from 'react';

// components
import Sidebar from './Sidebar';
import Footer from './Footer';
import ToTop from './ToTop';

// styles
import styles from '../styles/Layout.module.scss';


interface layoutProps {
  children: JSX.Element,
}

export default function Layout({ children }: layoutProps) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={styles.layout}>
      <Sidebar/>
      <div className={styles.darkness}></div>

      <div className={styles.container}>
        <div className={styles.main}>
          {children}
        </div>
        <Footer/>
      </div>
      
      <ToTop/>
    </div>
  )
};
