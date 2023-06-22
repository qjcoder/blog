import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} key={item.key}>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                src="/illustration.png"
                alt="blog-img"
                height={200}
                width={300}
              />
            </div>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
