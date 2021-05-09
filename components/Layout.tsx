// components
import Meta from './Meta';
import Sidebar from './Sidebar';
import Footer from './Footer';

//import styles from '../styles/Layout.module.scss';
import styles from '../styles/Home.module.scss';

interface layoutProps {
  children: JSX.Element,
}

export default function Layout({ children }: layoutProps) {
  return (
    <div>
      <Meta title="Daniel Castro"/> 
      <Sidebar/>
      
      <div className={styles.container}>
        {children}
        <Footer/>
      </div>
    </div>
  )
};
