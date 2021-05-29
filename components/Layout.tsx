// components

import Sidebar from './Sidebar';
import Footer from './Footer';

// styles
import styles from '../styles/Layout.module.scss';


interface layoutProps {
  children: JSX.Element,
}

export default function Layout({ children }: layoutProps) {
  return (
    <div>
      <Sidebar/>
      
      <div className={styles.container}>
        {children}
        <Footer/>
      </div>
    </div>
  )
};
