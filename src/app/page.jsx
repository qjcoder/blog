import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.mainheading}>
          Better design for your digital products.
        </h1>
        <h2 className={styles.secondary_heading}>
          Turning your ides into reality. We bring togather the teams from the
          global tech industry
        </h2>
        <Button />
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="hero-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
