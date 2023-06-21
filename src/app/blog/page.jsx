import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/id">
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
            <h1 className={styles.title}>
              Unlocking digital success with the power of Creative Strategy
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempora, velit voluptates, sapiente laudantium itaque culpa
              temporibus odit ipsam neque excepturi! Repudiandae harum
              consectetur ducimus maiores repellendus eligendi nisi maxime?
            </p>
          </div>
        </div>
      </Link>
      <Link href="/blog/id">
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
            <h1 className={styles.title}>
              Unlocking digital success with the power of Creative Strategy
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempora, velit voluptates, sapiente laudantium itaque culpa
              temporibus odit ipsam neque excepturi! Repudiandae harum
              consectetur ducimus maiores repellendus eligendi nisi maxime?
            </p>
          </div>
        </div>
      </Link>
      <Link href="/blog/id">
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
            <h1 className={styles.title}>
              Unlocking digital success with the power of Creative Strategy
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempora, velit voluptates, sapiente laudantium itaque culpa
              temporibus odit ipsam neque excepturi! Repudiandae harum
              consectetur ducimus maiores repellendus eligendi nisi maxime?
            </p>
          </div>
        </div>
      </Link>{" "}
      <Link href="/blog/id">
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
            <h1 className={styles.title}>
              Unlocking digital success with the power of Creative Strategy
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempora, velit voluptates, sapiente laudantium itaque culpa
              temporibus odit ipsam neque excepturi! Repudiandae harum
              consectetur ducimus maiores repellendus eligendi nisi maxime?
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
