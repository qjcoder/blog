import React from "react";
import styles from "./blog-post.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>
            Navigating the Digital Frontier:<br></br>
            The Art of User Experiance
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            perferendis accusamus labore reiciendis ex atque saepe! Aut ducimus
            magni reprehenderit nostrum nobis rem, ullam dolorum iusto deleniti,
            porro voluptate modi!
          </p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi
        incidunt aut repudiandae ea neque libero, magnam doloribus blanditiis,
        ut amet dolor deserunt nostrum vel expedita optio, dicta maxime autem.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non quam
        sint dolores, quasi dolor quia eligendi sapiente sunt minus blanditiis
        necessitatibus voluptatum ducimus. Reprehenderit quasi eligendi laborum
        cum nihil?
      </p>
      <br></br>
      <br></br>
      <h1>Why is user Experience is Important?</h1>
      <br></br>
      <br></br>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        voluptate aliquam illum fugiat dolorum tenetur, quibusdam accusamus sint
        qui nostrum perspiciatis quo laborum fugit nam numquam officia deleniti
        ex alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Veniam voluptate aliquam illum fugiat dolorum tenetur, quibusdam
        accusamus sint qui nostrum perspiciatis quo laborum fugit nam numquam
        officia deleniti ex alias. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam voluptate aliquam illum fugiat dolorum tenetur,
        quibusdam accusamus sint qui nostrum perspiciatis quo laborum fugit nam
        numquam officia deleniti ex alias.
        <br></br>
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        voluptate aliquam illum fugiat dolorum tenetur, quibusdam accusamus sint
        qui nostrum perspiciatis quo laborum fugit nam numquam officia deleniti
        ex alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Veniam voluptate aliquam illum fugiat dolorum tenetur, quibusdam
        accusamus sint qui nostrum perspiciatis quo laborum fugit nam numquam
        officia deleniti ex alias. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam voluptate aliquam illum fugiat dolorum tenetur,
        quibusdam accusamus sint qui nostrum perspiciatis quo laborum fugit nam
        numquam officia deleniti ex alias. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Veniam voluptate aliquam illum fugiat
        dolorum tenetur, quibusdam accusamus sint qui nostrum perspiciatis quo
        laborum fugit nam numquam officia deleniti ex alias. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Veniam voluptate aliquam illum
        fugiat dolorum tenetur, quibusdam accusamus sint qui nostrum
        perspiciatis quo laborum fugit nam numquam officia deleniti ex alias.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        voluptate aliquam illum fugiat dolorum tenetur, quibusdam accusamus sint
        qui nostrum perspiciatis quo laborum fugit nam numquam officia deleniti
        ex alias.
        <br></br>
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        voluptate aliquam illum fugiat dolorum tenetur, quibusdam accusamus sint
        qui nostrum perspiciatis quo laborum fugit nam numquam officia deleniti
        ex alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Veniam voluptate aliquam illum fugiat dolorum tenetur, quibusdam
        accusamus sint qui nostrum perspiciatis quo laborum fugit nam numquam
        officia deleniti ex alias. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam voluptate aliquam illum fugiat dolorum tenetur,
        quibusdam accusamus sint qui nostrum perspiciatis quo laborum fugit nam
        numquam officia deleniti ex alias.
      </p>
    </div>
  );
};

export default BlogPost;
