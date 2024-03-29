import Image from "next/image";
import styles from "./singlepost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug: any) => {
  const response = await fetch(
    `http://localhost:3000/api/blog/${slug.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
}

const SinglePostPage = async ({ params }: any) => {
  const { slug } = params;
  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img?post.img:"/noimagefound.png"}
          alt="post"
          fill
          className={styles.postImg}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && < Suspense fallback={<div>Loading...</div>} >
            <PostUser id={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
            
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
