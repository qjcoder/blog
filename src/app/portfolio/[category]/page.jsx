import React from "react";
import styles from "./category.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data.js";

const getData = (cat) => {
  const data = items[cat];
  console.log(cat);

  console.log(data);
  console.log(data[1].image);

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item?.id}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{item?.title}</h1>
            <p className={styles.desc}>{item?.desc}</p>
            <Button text={"See More"} url={"#"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="Blog Image"
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
