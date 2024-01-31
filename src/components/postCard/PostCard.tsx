import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

type Props = {post:any};

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
        <h1 className={styles.title}>{props.post.title}</h1>
        <p className={styles.desc}>{props.post.body}</p>
        <Link className={styles.pageLink} href={`/blog/${props.post.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
