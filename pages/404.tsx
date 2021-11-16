// styles
import styles from '../styles/404.module.scss';

// components
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.centered}>
      <h1>Page Not Found</h1>

      <p>This page does not exist.</p>
      <Link href="/">
        <button className={styles.button}>Return to Home</button>
      </Link>
    </div>
  );
}
