// components
import Content from '../components/Content/Content';
import Meta from '../components/Meta';

// styles
import styles from '../styles/Layout.module.scss';


export default function Home() {
  
  return (
    <div className={styles.main}>
      <Meta title="Daniel Castro"/>
      <Content/>
    </div>
  );
}
