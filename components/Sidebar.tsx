import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.scss';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
    alert("This is not implemented yet! Thank you.")
  }

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar_items}>
        <li className={styles.sidebar_logo}>
          <Link href="/"><a className={styles.sidebar_link}>
            <img src="/svg/sidebar/chevron-right-solid.svg" alt="arrowRight"/>
            <span className={styles.item_text}>DC Icon</span>
          </a></Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/"><a className={styles.sidebar_link}>
            <img src="/svg/sidebar/user-solid.svg" alt="user"/>
            <span className={styles.item_text}>About</span>
          </a></Link>
        </li>
        <li className={styles.sidebar_item}>
          <Link href="/"><a className={styles.sidebar_link}>
            <img src="/svg/sidebar/laptop-code-solid.svg" alt="laptopCode"/>
            <span className={styles.item_text}>Projects</span>
          </a></Link>
        </li>
        {/*
        <li className={styles.sidebar_item}>
            <Link href="/contact">
              <a className={styles.sidebar_link}>
              <img src="/svg/sidebar/blog-solid.svg" alt="blog"/>
              <span className={styles.item_text}>Blog</span>
              </a>  
            </Link>
        </li>
        */}
        <li className={styles.sidebar_item}>
          <Link href="/"><a className={styles.sidebar_link}>
            <img src="/svg/sidebar/envelope-solid.svg" alt="emailEnvelope"/>
            <span className={styles.item_text}>Contact</span>
          </a></Link>
        </li>
      </ul>
      
      {darkMode
      ?
      <li className={styles.sidebar_item}>
        <a className={styles.sidebar_link} onClick={changeMode}>
        <img src="/svg/sidebar/sun-solid.svg" alt="sun"/>
          <span className={styles.item_text}>Light Mode</span>
        </a>
      </li>
      :
      <li className={styles.sidebar_item}>
        <a className={styles.sidebar_link} onClick={changeMode}>
        <img src="/svg/sidebar/moon-solid.svg" alt="moon"/>
          <span className={styles.item_text}>Dark</span>
        </a>
      </li>
      }
    </nav>
  )
}
