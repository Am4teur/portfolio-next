// Next
import NextImage from 'next/image';
import { motion } from 'framer-motion';

// styles
import styles from '../../styles/About.module.scss';

export default function About() {
  return (
    <section className={styles['about-section']} id="about">

      <motion.div
        className={styles.about}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 , delay: 0.2 }}
      >
        <div className={styles.title}>
          <NextImage src="/images/dcicon.png" alt="Daniel Castro" width={40} height={40} ></NextImage>
          <h1 className={styles.header}>Daniel Castro</h1>
        </div>
        <div className={styles.pixelart}>
          
        </div>
        <div className={styles.card}>
          <p>I&#39;m a Software Engineer, with an affinity to Frontend, based in Lisbon, Portugal!</p>
        </div>
        <div className={styles.description}>
          <span>I consider myself an active learner and I&#39;m always exploring new and modern technologies.</span>
          <span>Recently, I&#39;ve completed a master's in Computer Science and Engineering.</span>
          <span>Currently, I&#39;m a Frontend Software Engineer at&nbsp;
            <a href="https://www.linkedin.com/company/volkswagen-digital-solutions/mycompany/">
              Volkswagen Digital Solutions
            </a>
          .</span>
          {/* <Image className={styles['image']} src="/images/profile2.png" alt="Daniel Castro" width={300} height={384}></Image> */}
        </div>
      </motion.div>

      <div className={styles.waves}></div>
    </section>
  );
}
