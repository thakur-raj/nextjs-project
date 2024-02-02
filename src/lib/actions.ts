"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData: any) => {

  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Added post", newPost);
    revalidatePath("/blog")
    
  } catch (error: any) {
    console.log("Unable to add post", error.message);
    return {
      error: error.message,
    };
  }

};

export const deletePost = async (formData: any) => {

    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
     
      await Post.findByIdAndDelete(id);
      console.log("Deleted post");
      revalidatePath("/blog")
      
    } catch (error: any) {
      console.log("Unable to delete post", error.message);
      return {
        error: error.message,
      };
    }
  
  };
  