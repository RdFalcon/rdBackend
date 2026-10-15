import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB=async function () {
    try{
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n mongDB connect !! DB Host: ${connectionInstance.connection.host}`)

    }
    
    catch(error){
        console.log("म याता छू यो कारण हो !",error);
        process.exit(1)
    }
}

export default connectDB;