import React from "react";
import styles from "./blog-post.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <p>{data.body}</p>
          <div className={styles.authorInfo}>
            <Image src="/1.png" alt="author-img" width={50} height={50} />
            <span>Author Name</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/illustration.png"
            alt="illustartions"
            width={500}
            height={300}
          />
        </div>
      </div>
      <p>
        {data.body}
        <br></br>
        <br></br>
        {data.body}
      </p>
      <br></br>
      <br></br>
      <h1>Why is user Experience is Important?</h1>
      {data.body}
      <br></br>
      <br></br>
      {data.body}
    </div>
  );
};

export default BlogPost;
