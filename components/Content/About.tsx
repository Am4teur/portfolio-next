// Next
import Image from 'next/image';

// styles
import styles from '../../styles/About.module.scss';

export default function About() {
  return (
    <section className={styles['about-section']} id="about">
      <span className={styles.title}>About</span>
      <div className={styles['card-about']}>
        <span className={styles['description']}>Welcome!
        Software Engineer. Interested in the field of Distributed Systems and Artificial Inteligence. I love to be able to show a few of my prjects via web, so naturally I fell in love with web development and design.
        </span>
        {/* <Image className={styles['image']} src="/images/profile2.png" alt="Daniel Castro" width={300} height={384}></Image> */}
      </div>
    </section>
  )
}
