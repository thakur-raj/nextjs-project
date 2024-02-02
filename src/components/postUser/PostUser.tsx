import { getUser } from "@/lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

type Props = {
  id: number;
};

// const getData = async (userId: any) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await response.json();
//   return data;
// };

const PostUser = async (props: Props) => {
  const user = await getUser(props.id);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img :"/noavatar.png"}
        alt="avatar"
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author Name</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
