//import { useState } from 'react';
import emailjs from 'emailjs-com';

import styles from '../../styles/Contact.module.scss';

export default function Contact() {

  const sendEmail = (e:any) => {
    e.preventDefault();
  
    emailjs.sendForm('gmail', 'template_7c9ffhq', e.target, 'user_EdIM3cXyfAuPAQWX3gyJ6')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  };



  return (
    <section className={styles.contact}>
      <div className={styles.centered}>
        Contact Me!
      </div>
      <form onSubmit={sendEmail}>
        <div className={styles.header}>
          <div className={styles.field}>
            <label>Name</label>
            <input type="text" name="name"/>
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" name="email"/>
          </div>
        </div>
        <div className={styles.field}>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
              
        <button className={[styles.button, styles.centered].join(' ')} type="submit">Send</button>
      </form>
    </section>
  )
}