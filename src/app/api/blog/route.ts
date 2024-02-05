import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts, { status: 200 });
    } catch (error:any) {
        console.log("Unable to get posts", error);
        throw new Error("Unable to get posts", error);        
    }
}