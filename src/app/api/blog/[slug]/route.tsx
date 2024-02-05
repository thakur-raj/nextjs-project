import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    connectToDb();
    const { slug } = params;
    const post = await Post.findOne({ slug: slug });
    return NextResponse.json(post, { status: 200 });
  } catch (error: any) {
    console.log("Unable to get posts", error);
    throw new Error("Unable to get posts", error);
  }
};


export const DELETE = async (
    request: NextRequest,
    { params }: { params: { slug: string } }
  ) => {
    try {
      connectToDb();
      const { slug } = params;
       await Post.deleteOne({ slug: slug });
      return NextResponse.json("post deleted", { status: 200 });
    } catch (error: any) {
      console.log("Unable to delete post", error);
      throw new Error("Unable to delete post", error);
    }
  };
  