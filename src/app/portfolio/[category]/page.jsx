import React from "react";
import styles from "./category.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a
            provident ipsam, reprehenderit amet molestiae nobis cum dolorum odit
            atque? Ad debitis a, eos esse perspiciatis hic ea nisi consectetur?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/illustration.png"}
            alt="Blog Image"
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a
            provident ipsam, reprehenderit amet molestiae nobis cum dolorum odit
            atque? Ad debitis a, eos esse perspiciatis hic ea nisi consectetur?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/illustration.png"}
            alt="Blog Image"
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a
            provident ipsam, reprehenderit amet molestiae nobis cum dolorum odit
            atque? Ad debitis a, eos esse perspiciatis hic ea nisi consectetur?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/illustration.png"}
            alt="Blog Image"
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
