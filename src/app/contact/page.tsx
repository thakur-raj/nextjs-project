// "use client"

import Image from "next/image";
import styles from "./contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "My next app Contact Page description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" width={500} height={500} className={styles.contactImg}/>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.formTag}>
          <input
            type="text"
            placeholder="Name and Surname"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter your Phone number (Optional)"
            className={styles.input}
          />
          <textarea
            placeholder="Enter your message"
            className={styles.textarea}
            cols={30}
            rows={10}
          />
          <button className={styles.buttonElement}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
