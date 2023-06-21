import React from "react";
import styles from "./register.module.css";
import Button from "@/components/button/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.container}>
      <h1>Create an Account</h1>
      <h2>Please sign up to see the dashboard.</h2>
      <form className={styles.form}>
        <input placeholder="Username" type="text" className={styles.input} />
        <input placeholder="Email" type="text" className={styles.input} />
        <input placeholder="Password" type="text" className={styles.input} />

        <button className={styles.button}>
          <Link href="/dashboard/login">Register</Link>
        </button>
      </form>
      <span> -OR-</span>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
