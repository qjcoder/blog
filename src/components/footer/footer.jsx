import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; QJBlog. All rights reserved</p>
      </div>
      <div className={styles.social}>
        <Link href="#">
          <Image src="/1.png" alt="Facebook icon" height={25} width={25} />
        </Link>
        <Link href="#">
          <Image src="/2.png" alt="Facebook icon" height={25} width={25} />
        </Link>
        <Link href="#">
          <Image src="/3.png" alt="Facebook icon" height={25} width={25} />
        </Link>
        <Link href="#">
          <Image src="/4.png" alt="Facebook icon" height={25} width={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
