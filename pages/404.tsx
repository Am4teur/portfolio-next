// styles
import styles from '../styles/404.module.scss';

// components
import Meta from '../components/Meta';
import NextLink from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.centered}>
      <Meta title="Daniel Castro - Not Found"/>
      <h1>Page Not Found</h1>

      <p>This page does not exist.</p>
      <NextLink href="/">
        <button className={styles.button}>Return to Home</button>
      </NextLink>
    </div>
  );
}
