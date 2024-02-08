import { motion } from 'framer-motion';
import { useState } from 'react';

import NextImage from 'next/image';
import NextLink from 'next/link';

import { goToTop } from './ToTop';

import styles from '@styles/Layout.module.scss';
// import blogSVG from '../public/svg/sidebar/blogSVG';
// import arrowRightSVG from '../public/svg/sidebar/arrowRightSVG';
// import userSVG from '../public/svg/sidebar/userSVG';
// import projectSVG from '../public/svg/sidebar/projectSVG';
// import emailEnvelopeSVG from '../public/svg/sidebar/emailEnvelopeSVG';
// import sunSVG from '../public/svg/sidebar/sunSVG';
// import moonSVG from '../public/svg/sidebar/moonSVG';

const arrowRightMotion = {
  hover: {
    // rotate: -180,
    // y: -5,
    rotateY: 180,
    transition: {
      duration: 0.2,
    },
  },
};

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(true);

  // decided to have the svg like this to be able to fill the color when hovering and other actions
  const arrowRightSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      className="svg-inline--fa fa-chevron-right fa-w-10"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      />
    </svg>
  );
  const userSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="user"
      className="svg-inline--fa fa-user fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      ></path>
    </svg>
  );
  const projectSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="laptop-code"
      className="svg-inline--fa fa-laptop-code fa-w-20"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      ></path>
    </svg>
  );
  const blogSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="blog"
      className="svg-inline--fa fa-blog fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"
      ></path>
    </svg>
  );
  const emailEnvelopeSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="envelope"
      className="svg-inline--fa fa-envelope fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
      />
    </svg>
  );
  const sunSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="sun"
      className="svg-inline--fa fa-sun fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
      ></path>
    </svg>
  );
  const moonSVG = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="moon"
      className="svg-inline--fa fa-moon fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
      ></path>
    </svg>
  );

  const changeMode = () => {
    setDarkMode(!darkMode);
    alert('This is not implemented yet! Thank you.');
  };

  return (
    <motion.nav className={styles.sidebar} whileHover="hover">
      <ul className={styles.sidebar_items}>
        <li className={styles.sidebar_logo}>
          <NextLink href="/">
            <a className={styles.sidebar_link} onClick={goToTop}>
              <motion.div variants={arrowRightMotion}>
                {arrowRightSVG}
              </motion.div>
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
};

export default Sidebar;
