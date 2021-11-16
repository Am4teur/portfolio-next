// Next
import NextImage from 'next/image';

// styles
import styles from '../../styles/About.module.scss';

export default function About() {
  return (
    <section className={styles['about-section']} id="about">
      <div className={styles.about}>
        <div className={styles.title}>
          <NextImage src="/images/dcicon.png" alt="Daniel Castro" width={40} height={40} ></NextImage>
          <h1 className={styles.header}>Daniel Castro</h1>
        </div>
        <div className={styles.card}>
            <p>I&#39;m a Full-stack Software Engineer, with affinity to Frontend, based in Portugal!</p>
        </div>
        <div>
            <p>Interested in the field of Distributed
            Systems and Artificial Inteligence.</p>
            <p>I love to be able to show my projects via web, so naturally I fell in love with web
            development and design.</p>
          {/* <Image className={styles['image']} src="/images/profile2.png" alt="Daniel Castro" width={300} height={384}></Image> */}
        </div>
      </div>

      <div className={styles.waves}></div>
    </section>
  );
}
