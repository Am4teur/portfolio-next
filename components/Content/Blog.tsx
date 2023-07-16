import FadeInWhenVisible from '../FadeInWhenVisible';

import styles from '../../styles/Blog.module.scss';

const Blog = () => {
  var bookReviewSVG: string = '/svg/blog/undraw_book_lover_mkck.svg';
  var techBlogSVG: string = '/svg/blog/undraw_feeling_proud_qne1.svg';

  return (
    <section className={styles['blog-section']} id="blog">
      <FadeInWhenVisible>
        <div className={styles.blog}>
          <span className={styles.title}>Blog</span>
          <div className={styles['blog-cards']}>
            <div className={styles['blog-card']}>
              <div className={styles['blog-card__header']}>
                <span className={styles['blog-card__subtitle']}>
                  Technical Posts
                </span>
                <img
                  className={styles['blog-card__image']}
                  src={techBlogSVG}
                  alt="tree"
                />
              </div>
              <div className={styles['blog-card__description']}>
                <p>Interested in learning technical content?</p>
                <p>
                  Follow me at{' '}
                  <a href="https://dev.to/am4teur" style={{ color: '#007acc' }}>
                    dev.to
                  </a>{' '}
                  and check out the posts!
                </p>
              </div>
            </div>

            <div className={styles['blog-card']}>
              <div className={styles['blog-card__description']}>
                <p>Interested in finding new books to read?</p>
                {/*<p>Find more about what I have been reading lately and my book reviews on them and I assure you that you will find a book that interests you.</p>*/}
                <p>
                  Follow me at{' '}
                  <a
                    href="https://www.goodreads.com/daniel_castro"
                    style={{ color: '#007acc' }}
                  >
                    goodreads
                  </a>{' '}
                  and check out the reviews!
                </p>
              </div>
              <div className={styles['blog-card__header']}>
                <span className={styles['blog-card__subtitle']}>
                  Book Reviews
                </span>
                <img
                  className={styles['blog-card__image']}
                  src={bookReviewSVG}
                  alt="tree"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      <div className={styles.waves}></div>
    </section>
  );
};

export default Blog;
