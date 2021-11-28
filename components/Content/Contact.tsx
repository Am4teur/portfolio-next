import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../../styles/Contact.module.scss';
import FadeInWhenVisible from '../FadeInWhenVisible';

export default function Contact() {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e:any) => {
    e.preventDefault();

    if(e.target.name.value == "") {
      setErrorMsg("The name needs to be non-empty!");
      return;
    }
    if(e.target.email.value == "") {
      setErrorMsg("The email needs to be non-empty!");
      return;
    }
    if(e.target.message.value == "") {
      setErrorMsg("The message needs to be non-empty!");
      return;
    }

    emailjs.sendForm('gmail', 'template_7c9ffhq', e.target, 'user_EdIM3cXyfAuPAQWX3gyJ6')
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      setErrorMsg("");
    }, (error) => {
      console.log(error.text);
      setSuccess(false);
      setErrorMsg("Error sending the email. Please try again later.");
    });

    e.target.reset();
  };



  return (
    <FadeInWhenVisible>

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
        <div className={styles.field}>
          {errorMsg !== "" ? <label className={styles.errorMsg}>{errorMsg}</label> : null}
          {success ? <label className={styles.successMsg}>The email was successfully sent.</label> : null}
        </div>
        <div className={styles.centered}>
          <button className={styles['submit-button']} type="submit">Send</button>
        </div>
              
      </form>
    </section>
    </FadeInWhenVisible>
  )
}
