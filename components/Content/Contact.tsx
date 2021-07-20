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
    <section className={styles.contact} id="contact">
      <div className={styles.centered}>
        Contact Me!
      </div>
      <form className={styles['contact-form']} onSubmit={sendEmail}>
        <label className={styles.header}>Send me an email</label>
        <div className={styles.auth}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text" name="name"/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" name="email" placeholder="youremail@mail.com"/>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Message</label>
          <textarea className={styles.message} name="message"></textarea>
        </div>
        <div className={styles.centered}>
          <button className={styles['submit-button']} type="submit">Send</button>
        </div>
              
      </form>
    </section>
  )
}
