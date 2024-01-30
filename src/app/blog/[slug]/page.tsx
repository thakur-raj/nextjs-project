import Image from "next/image";
import styles from "./singlepost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19832341/pexels-photo-19832341/free-photo-of-cliff-over-beach-on-sea-shore.jpeg"
          alt="post"
          fill
          className={styles.postImg}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            width={50} height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author Name</span>
            <span className={styles.detailValue}>Raj Thakur</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          natus excepturi corrupti necessitatibus veritatis? Dolore,
          dignissimos, id quibusdam totam maiores quia quam vitae aperiam quod
          placeat quaerat. Amet, soluta praesentium.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
