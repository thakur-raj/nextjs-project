import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

type Props = {};

const PostCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/19832341/pexels-photo-19832341/free-photo-of-cliff-over-beach-on-sea-shore.jpeg" alt="post" fill className={styles.postImg}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo at expedita voluptatum, repellendus molestiae, veniam officia delectus illo aut rem facere sequi perferendis possimus temporibus incidunt quae? Aperiam, molestiae explicabo.</p>
        <Link className={styles.pageLink} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
