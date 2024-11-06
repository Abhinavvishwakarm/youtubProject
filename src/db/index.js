import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionDb = async () =>{
    try {
       const connectionInstence =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`\n MongoDb Connected !! DB HOST : ${connectionInstence.connection.host}`)
    } catch (error) {
        console.info('MONGODB CONNECTION ERROR',error);
        throw error
        
    }
}

export default connectionDb;