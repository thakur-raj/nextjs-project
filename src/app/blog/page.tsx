import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600}
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post: any) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
