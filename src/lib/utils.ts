import mongoose from "mongoose";

const connection:{isConnected?: number} = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
        console.log("Already connected. Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection['isConnected'] = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to connect to database" , error);
  }
};
