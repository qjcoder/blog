import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <h2 className={styles.desc}>
          Turning your ides into reality. We bring togather the teams from the
          global tech industry
        </h2>
        <Button text={"See Our Works"} url={"/portfolio"} />
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.png"
          alt="hero-image"
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Home;
