import styles from "./postuser.module.css";

type Props = {
  id: number|undefined;
};

const getData = async (userId: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const PostUser = async (props: Props) => {
  const user = await getData(props.id);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author Name</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
