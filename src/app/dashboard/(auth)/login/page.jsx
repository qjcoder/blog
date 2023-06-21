import React from "react";
import styles from "./login.module.css";
import Button from "@/components/button/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subTitle}>Please sign to see the dashboard.</h2>
      <form className={styles.form}>
        <input placeholder="Email" type="text" className={styles.input} />
        <input placeholder="Password" type="text" className={styles.input} />

        <button className={styles.button}>Login</button>
        <button className={styles.button + " " + styles.google}>
          Login with Google
        </button>
      </form>
      <span className={styles.or}> -OR-</span>
      <Link href="/dashboard/register" className={styles.link}>
        Create New Account
      </Link>
    </div>
  );
};

export default Login;
