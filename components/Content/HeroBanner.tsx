import styles from '@styles/HeroBanner.module.scss';

const HeroBanner = () => {
  const goToContact = () => {
    document.documentElement.scrollTo({
      // bottom instead of top
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.heroBannerContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.name}>Daniel Castro</div>
        <div className={styles.description}>Fullstack Software Engineer</div>
        <div className={styles.socialMedia}></div>
        <div className={styles.colorfulWords}>Development</div>
        <button className={styles.contactButton} onClick={goToContact}>
          A button to scroll to the contact form
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
