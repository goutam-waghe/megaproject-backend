import ConnectDB from "./db/index.js";

// require("dotenv").config({
//   path: "./env",
// });
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

ConnectDB();

//1st aproch
// import express from "express"
// const app = express()
// ;(async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error"  , (error) => {
//         console.log("error", error)
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log(`App is listing on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("Error " , error)
//         throw error
//     }
// })()
