import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

type Props = {post:any};

const PostCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {props.post.img ?
        <div className={styles.imgContainer}>
            <Image src={props.post.img} alt="post" fill className={styles.postImg}/>
        </div>
        :
        <div className={styles.imgContainer}>
            <Image src={"/noimagefound.png"} alt="post" fill className={styles.postImg}/>
        </div>
}
        <span className={styles.date}>{props.post.createdAt.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{props.post.title}</h1>
        <p className={styles.desc}>{props.post.body}</p>
        <Link className={styles.pageLink} href={`/blog/${props.post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
