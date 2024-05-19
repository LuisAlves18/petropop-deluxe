import mongoose from "mongoose";

const connectDB = async (uri:string) => {
    try {
      if (uri) {
        await mongoose.connect(uri);
        console.log("🎉 connected to database successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
export default connectDB;