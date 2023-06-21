import styles from "./dashboard.module.css";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/illustration.png" alt="" width={200} height={100} />
          </div>
          <h2 className={styles.postTitle}>Navigating the Mobile Frontier:</h2>
          <span className={styles.delete}>X</span>
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/illustration.png" alt="" width={200} height={100} />
          </div>
          <h2 className={styles.postTitle}>Navigating the Mobile Frontier:</h2>
          <span className={styles.delete}>X</span>
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/illustration.png" alt="" width={200} height={100} />
          </div>
          <h2 className={styles.postTitle}>Navigating the Mobile Frontier:</h2>
          <span className={styles.delete}>X</span>
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/illustration.png" alt="" width={200} height={100} />
          </div>
          <h2 className={styles.postTitle}>Navigating the Mobile Frontier:</h2>
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
