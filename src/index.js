// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// ( async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.error('ERROR',error);
//         throw error
//     }
// })()
import dotenv from 'dotenv'
import connectionDb from './db/index.js'

dotenv.config({
    path: './env'
})
connectionDb();