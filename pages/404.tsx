import NextLink from 'next/link';
import CustomMeta from '../components/CustomMeta';

import styles from '@styles/404.module.scss';

const Custom404 = () => {
  return (
    <div className={styles.centered}>
      <CustomMeta title="Daniel Castro - Not Found" />
      <h1>Page Not Found</h1>

      <p>This page does not exist.</p>
      <NextLink href="/">
        <button className={styles.button}>Return to Home</button>
      </NextLink>
    </div>
  );
};

export default Custom404;
