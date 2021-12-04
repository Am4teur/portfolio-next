import { useState } from 'react';
import { motion } from 'framer-motion';

import NextLink from 'next/link';
import NextImage from 'next/image';

import { goToTop } from './ToTop';

import styles from '../styles/Layout.module.scss';
import blogSVG from '../public/svg/sidebar/blogSVG';
import arrowRightSVG from '../public/svg/sidebar/arrowRightSVG';
import userSVG from '../public/svg/sidebar/userSVG';
import projectSVG from '../public/svg/sidebar/projectSVG';
import emailEnvelopeSVG from '../public/svg/sidebar/emailEnvelopeSVG';
import sunSVG from '../public/svg/sidebar/sunSVG';
import moonSVG from '../public/svg/sidebar/moonSVG';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
    alert('This is not implemented yet! Thank you.');
  };

  return (
    <motion.nav className={styles.sidebar}>
      <ul className={styles.sidebar_items}>
        <li className={styles.sidebar_logo}>
          <NextLink href="/">
            <a className={styles.sidebar_link} onClick={goToTop}>
              {arrowRightSVG}
              <NextImage
                src="/images/dcicon.png"
                alt="Daniel Castro"
                width={40}
                height={40}
              ></NextImage>
            </a>
          </NextLink>
        </li>
        <li className={styles.sidebar_item}>
          <NextLink href="#about">
            <a className={styles.sidebar_link}>
              {userSVG}
              <span className={styles.item_text}>About</span>
            </a>
          </NextLink>
        </li>
        <li className={styles.sidebar_item}>
          <NextLink href="#projects">
            <a className={styles.sidebar_link}>
              {projectSVG}
              <span className={styles.item_text}>Projects</span>
            </a>
          </NextLink>
        </li>
        <li className={styles.sidebar_item}>
          <NextLink href="#blog">
            <a className={styles.sidebar_link}>
              {blogSVG}
              <span className={styles.item_text}>Blog</span>
            </a>
          </NextLink>
        </li>
        <li className={styles.sidebar_item}>
          <NextLink href="#contact">
            <a className={styles.sidebar_link}>
              {emailEnvelopeSVG}
              <span className={styles.item_text}>Contact</span>
            </a>
          </NextLink>
        </li>
      </ul>

      {darkMode ? (
        <li className={styles.sidebar_item}>
          <a className={styles.sidebar_link} onClick={changeMode}>
            {sunSVG}
            <span className={styles.item_text}>Light</span>
          </a>
        </li>
      ) : (
        <li className={styles.sidebar_item}>
          <a className={styles.sidebar_link} onClick={changeMode}>
            {moonSVG}
            <span className={styles.item_text}>Dark</span>
          </a>
        </li>
      )}
    </motion.nav>
  );
}
