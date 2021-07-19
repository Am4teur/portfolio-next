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
  return (
    <div>
      <Sidebar/>
      
      <div className={styles.container}>
        {children}
        <Footer/>
      </div>
      <ToTop/>
    </div>
  )
};
