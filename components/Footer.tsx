// styles
import styles from '../styles/Layout.module.scss';

// images
//import typescripticon from '../imgs/typescript.svg';


export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer_items}>
        <li className={styles.footer_item}>
          <a href="https://github.com/Am4teur">
            <img src="/svg/github-square-brands.svg" alt="Github"/>
          </a>
        </li>
        <li className={styles.footer_item}>
          <a href="https://www.linkedin.com/in/danieldmcastro/">
          <img src="/svg/linkedin-brands.svg" alt="Linkedin"/>
          </a>
        </li>
        <li className={styles.footer_item}>
          <a href="https://www.instagram.com/danieldmcastro/">
          <img src="/svg/instagram-square-brands.svg" alt="Instagram"/>
          </a>
        </li>
        <li className={styles.footer_item}>
          <a href="https://www.facebook.com/daniel.castro.11/">
          <img src="/svg/facebook-square-brands.svg" alt="Facebook"/>
          </a>
        </li>
        <li className={styles.footer_item}>
          <a href="https://dev.to/am4teur">
          <img src="/svg/dev-brands.svg" alt="DEV"/>
          </a>
        </li>
      </ul>

      <div className={styles.footer_copyright}>© 2021 Copyright and Created by&nbsp;
        <a className={styles.link_name} href="https://github.com/Am4teur">Daniel Castro&nbsp;</a>
        with &nbsp;
        <a href="https://reactjs.org/"><img src="/svg/react.svg" alt="React"/></a> &nbsp;
        <a href="https://www.typescriptlang.org/"><img src="/svg/typescript-icon.svg" alt="Typescript"/></a> &nbsp;
        <a href="https://nextjs.org/"><img src="/svg/nextjs-icon.svg" alt="Nextjs"/></a>
      </div>
    </div>
  )
}


/*


// https://dev.to/letsbsocial1/flexbox-sticky-footer-and-react-e1h
const Footer = () => {
  return (

  <div className="footer bg-secondary">



</div>  
  )
}

export default Footer;*/