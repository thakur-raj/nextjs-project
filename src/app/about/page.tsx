import Image from "next/image";
import styles from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "My next app About Page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.subTitle}>About Agency</h1>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Projects Completed</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Projects Completed</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="about"
          fill
          className={styles.aboutImg}
        />
      </div>
    </div>
  );
};

export default AboutPage;
