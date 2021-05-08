import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Home.module.scss';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';


export default function Content() {
  return (
    <div className={styles.main}>
      <div style={{border: "round"}}>
        <Image
          className={styles.image}
          src="/images/profile.jpg"
          alt="Daniel Castro"
          width={450}
          height={495}>
        </Image>
      </div>
      <Home />
      <About />
      <Blog />
      <Projects />
      
      <button className={styles.button}>Click me!</button>
    </div>
  )
}
