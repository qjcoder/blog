import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondary_heading}>Choose a gallery</div>
      <div className={styles.items}>
        <Link href="/portfolio/Illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/Websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/Application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
