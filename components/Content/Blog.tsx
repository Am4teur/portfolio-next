import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Blog.module.scss';

export default function Blog() {
  var bookReviewSVG:string = "/svg/blog/undraw_book_lover_mkck.svg";
  var techBlogSVG:string = "/svg/blog/undraw_feeling_proud_qne1.svg";

  return (
    <section className={styles['blog-section']}  id="blog">
      <div className={styles.blog}>
        <span className={styles.title}>Blog</span>
        <div className={styles['blog-cards']}>
          <a className={styles['blog-card']} href="#">
            <div className={styles['blog-card__header']}>
              <span className={styles['blog-card__subtitle']}>Technical Blog</span>
              <img className={styles['blog-card__image']} src={techBlogSVG} alt="tree"/>
            </div>
            <div className={styles['blog-card__description']}>
              <p>TODO nice description</p>
            </div>
          </a>
          <a className={styles['blog-card']} href="#">
            <div className={styles['blog-card__description']}>
              <p>Interested in finding new books to read?</p>
              {/*<p>Find more about what I have been reading lately and my book reviews on them and I assure you that you will find a book that interests you.</p>*/}
              <p>Feel free to follow me at <a href="https://www.goodreads.com/daniel_castro" style={{color: "#007acc"}}>goodreads</a> and read my reviews!</p>
            </div>
            <div className={styles['blog-card__header']}>
              <span className={styles['blog-card__subtitle']}>Book Reviews</span>
              <img className={styles['blog-card__image']} src={bookReviewSVG} alt="tree"/>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.waves}></div>
    </section>
  )
}