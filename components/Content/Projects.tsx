import FadeInWhenVisible from '../FadeInWhenVisible';

// styles
import styles from '../../styles/Projects.module.scss';

export default function Projects() {
  return (
    <section className={styles['projects-section']}  id="projects">

      <FadeInWhenVisible>
      <div className={styles.projects}>
        <span className={styles.centered}>Projects</span>
        <div className={styles.listProjects}>
          <div className={styles.item}>
            <span className={styles.centered}>Mazer</span>
          </div>
          <div className={[styles.item, styles.centered].join(" ")}>
            RisingArt
          </div>
          <div className={styles.item}>
            <span className={styles.centered}>Android App</span>
          </div>
          <div className={styles.item}>
            <span className={styles.centered}>Sudoku Solver</span>
          </div>
          <div className={styles.item}>
            <span className={styles.centered}>Smart Grid</span>
          </div>
        </div>
      </div>
      </FadeInWhenVisible>

      <div className={styles.waves}></div>
    </section>
  )
}
