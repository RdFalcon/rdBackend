// require('dotenv').config({path:"./env"})
import dns from "node:dns";

import dotenv from "dotenv";

import connectDB from "./db/index.js";
 dns.setServers(["8.8.8.8","4.2.2.2"]);

dotenv.config({
    path:'./.env'
})
connectDB()





/*import express from "express";
const app=express();
(async function (){
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",function(error){
            console.log("Err",error)
        });
        app.listen(process.env.PORT,function(){
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    }
    catch(error){
        console.log("Error",error);
    }
  }  ()
)


function connectDB(){




}
connectDB();
*/