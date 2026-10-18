// require('dotenv').config({path:"./env"})
import dns from "node:dns";
import express from "express";
import dotenv from "dotenv";
import app from "./app.js"


import connectDB from "./db/index.js";
 dns.setServers(["8.8.8.8","4.2.2.2"]);

dotenv.config({
    path:'./.env'
})
connectDB()
.then(function(){
    app.listen(process.env.PORT||8000,function(){
        console.log(`server start vaego this port ma : ${process.env.PORT}`)
    })
} )
.catch(function(error)
{console.log("connection fail vaego",error);});
    







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