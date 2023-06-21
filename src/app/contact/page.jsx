import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const Contact = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact-img"
            fill={true}
            className={styles.img}
          />
        </div>

        <form className={styles.form}>
          <input placeholder="name" className={styles.input} />
          <input placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            cols={30}
            rows={10}
            className={styles.textarea}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
