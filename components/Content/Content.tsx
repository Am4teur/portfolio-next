// Next
import Image from 'next/image';

// components
import About from './About';
//import Blog from './Blog';
import Projects from './Projects';
import Contact from './Contact';
// Contact

// styles
import styles from '../../styles/Content.module.scss';


export default function Content() {
  return (
    <>
      <div>"Greetings!"</div>
      <Image className={styles.image} src="/images/profile.jpg" alt="Daniel Castro" width={450} height={495} ></Image>
      <About />
      <Projects />
      {/*<Blog />*/}
      <Contact />
    </>
  )
}
