import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    // ye ek object return krta hai
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB Connected ! Db Host:${connectionInstance.connection.host}`);
    // console.log(connectionInstance);
  } catch (error) {
    console.log("mongo db failed error: ", error);
    process.exit(1);
  }
};

export default ConnectDB;
