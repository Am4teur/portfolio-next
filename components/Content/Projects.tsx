import NextImage from 'next/image';
import NextLink from 'next/link';
import FadeInWhenVisible from '../FadeInWhenVisible';
import styles from '../../styles/Projects.module.scss';
import externalLink from '../../public/svg/externalLink';
import github from '../../public/svg/github';


export default function Projects() {
  const some = "ola";
  return (
    <section className={styles['projects-section']}  id="projects">

      <FadeInWhenVisible>
      <div className={styles.projects}>
        <h1 className={styles['section-title']}>Projects</h1>
        <div className={styles.projectsList}>
          
          <div className={styles.item}>
            <img src="/images/random.jpg" alt="Random" />

            <div className={styles.info}>

              <span className={styles['project-title']}>Mazer</span>
              <span className={styles['description']}>A multiplayer maze solving game.</span>

              <p className={styles['tech']}>MERN Typescript Socket.io CSS-in-JS</p>
              <div className={styles['icons']}>
                <a href="https://mazer.netlify.app/" className={styles['external-link']}>
                  {externalLink}
                </a>
                <a href="https://github.com/Am4teur/MazerMERN" className={styles['external-link']}>
                  {github}
                </a>
              </div>
            </div>


          </div>

          <div className={styles.item}>
            <img src="/images/random.jpg" alt="Random" />

            <div className={styles.info}>

              <span className={styles['project-title']}>Rising Art</span>
              <span className={styles['description']}>E-shop where new and rising artists can sell their art.</span>
              
              <p className={styles['tech']}>React MUI Commerce.js</p>
              <div className={styles['icons']}>
                <a href="https://risingart.netlify.app/" className={styles['external-link']}>
                  {externalLink}
                </a>
                <a href="https://github.com/Am4teur/rising-art-ecomm" className={styles['external-link']}>
                  {github}
                </a>
              </div>
            </div>

          </div>
          
          {/*           
          <div className={styles.item}>
            <span className={styles.centered}>Android App</span>
          </div>
          <div className={styles.item}>
            <span className={styles.centered}>Sudoku Solver</span>
          </div>
          <div className={styles.item}>
            <span className={styles.centered}>Smart Grid</span>
          </div>
          */}

        </div>
      </div>
      </FadeInWhenVisible>

      <div className={styles.waves}></div>
    </section>
  )
}
