import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thought Agency</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.butttons}>
          <button className={styles.butttons}>Learn More</button>
          <button className={styles.butttons}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='brands' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image src='/hero.gif' alt='hero' fill className={styles.heroImg} />

      </div>
    </div>
  );
};

export default Home;
