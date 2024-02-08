"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

import bcrypt from "bcrypt";

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
  

  export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }

  export const handleLogout = async () => {
    "use server"
    await signOut()
  }

  export const register = async (previousState:any,formData: any) => {
    const { username, email, password,img,passwordRepeat } = Object.fromEntries(formData);

    if(password !== passwordRepeat) {
      return {
        error: "Passwords do not match"
      }
    }
    try {
      connectToDb();

      const user = await User.findOne({ username });
      if(user) {
        return {
          error: "User already exists"
        }
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const newUser = new User({
        username,
        email,
        password:hashedPassword,
        img
      });

      await newUser.save();
      console.log("Registered user ==> ", newUser);
      return {success: true};
    } catch (error: any) {
      console.log("Unable to register", error.message);
      return {
        error: "Someting went wrong",
      }
      
    }
  }

  export const login = async (previousState:any,formData: any) => {
    const { username, password } = Object.fromEntries(formData);

    try {
      await signIn("credentials", {
        username,
        password,
      })
      
    } catch (error: any) {
      console.log("Unable to login", error.message);

      if(error.message === "CredentialsSignin") {
        return {
          error: "Invalid Credentials"
        }
      }

      throw error;
      
    }


  }
