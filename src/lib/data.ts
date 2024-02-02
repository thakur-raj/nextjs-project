import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// const users = [
//   { id: 1, name: "John", },
//   { id: 2, name: "Jane", },
//   {  id: 3, name: "Jim", }
// ];


// const posts = [
//   { id: 1, title: "Post 1", body: "Body 1", userId: 1 },
//   { id: 2, title: "Post 2", body: "Body 2", userId: 2 },
//   { id: 3, title: "Post 3", body: "Body 3", userId: 3 },
//   { id: 4, title: "Post 4", body: "Body 4", userId: 1 },
// ]

export const getPosts = async () => {
  // noStore()
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error: any) {
    console.log("Unable to get posts", error);
    throw new Error("Unable to get posts", error);
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error: any) {
    console.log("Unable to get post", error);
    throw new Error("Unable to get post", error);
  }
};

export const getUsers = async (id: number) => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error: any) {
    console.log("Unable to get users", error);
    throw new Error("Unable to get users", error);
  }
};

export const getUser = async (id: number) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error: any) {
    console.log("Unable to get user", error);
    throw new Error("Unable to get user", error);
  }
};
