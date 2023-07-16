import { motion } from 'framer-motion';
import NextImage from 'next/image';

import styles from '../../styles/About.module.scss';

const About = () => {
  return (
    <section className={styles['about-section']} id="about">
      <motion.div
        className={styles.about}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.title}>
          <NextImage
            src="/images/dcicon.png"
            alt="Daniel Castro"
            width={40}
            height={40}
          ></NextImage>
          <h1 className={styles.header}>Daniel Castro</h1>
        </div>
        <div className={styles.pixelart}></div>
        <div className={styles.card}>
          <p>
            Fullstack SWE, with affinity/focus to Frontend, based in Lisbon,
            Portugal [portugal flag emoji]
          </p>
        </div>
        <div className={styles.description}>
          <span>
            Active learner and explorer of modern technologies. NextJS
            enthusiast
          </span>
          <span>
            Master&#39;s degree in Computer Science and Engineering at Instituto
            Superior Técnico, #1 Ranked Engineering University in [Portugal
            Icon]
          </span>
          <span>
            Developing as a Fullstack SWE at Tripadvisor, on the{' '}
            <a href="https://www.linkedin.com/company/volkswagen-digital-solutions/mycompany/">
              Viator
            </a>{' '}
            product. My team is Listing & Content Team. We manage our CMS and
            all website pages that have a Listing of product. .
          </span>
          {/* Missing a team photo */}
          {/* <Image className={styles['image']} src="/images/profile2.png" alt="Daniel Castro" width={300} height={384}></Image> */}
        </div>
      </motion.div>

      <div className={styles.waves}></div>
    </section>
  );
};

export default About;
