"use client";
import Image from "next/image";
import useSWR from "swr";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  //Method 1: Fetch data at Client side using useEffect
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  //Method 2: Fetch data at Client side using SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/illustration.png" alt="" width={200} height={100} />
          </div>
          <h2 className={styles.postTitle}>{data.title}</h2>
          <span className={styles.delete}>X</span>
        </div>
      </div>
      <form className={styles.new}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
