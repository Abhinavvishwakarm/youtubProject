[MODEL LINK]  --- > (https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)


        DATABASE CONNECTION 
                      STEPS 
                          1 Install Required Packages: First, ensure that you have the required packages installed in your Node.js project
                             -> npm install mongoose dotenv
                             
                          2 Create .env File: In your project root directory, create a .env file to store sensitive information like the MongoDB connection URL. Example
                             -> PORT = 8000:
                             -> MONGODB_URL=mongodb+srv://abhinav:IzPWe3DwPM5PWBv3@cluster0.urtdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
                             
                          3 Import dotenv and Configure It: In your main server file (e.g., index.js ), require and configure the dotenv package to load the environment variables from the .env file.
                            -> import dotenv from 'dotenv'

                          4 Import Mongoose and Connect to MongoDB: After loading the environment variables, use mongoose to connect to MongoDB using the connection string stored in .env.
                            -> import mongoose from "mongoose";
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

                           5 dotenv ( DOTENV) !IMPOETENT - > Never commit your .env file to version control. Add it to .gitignore to keep sensitive information safe
                            -> used  .gitignore file 
       
      DATABASE CONNECTION SUMMARY
                Install mongoose and dotenv.
                Use .env to store sensitive credentials like your MongoDB URI.
                Load the .env file using dotenv.config().
                Use Mongoose's mongoose.connect() method to establish a connection to the MongoDB server.
                Add error handling and manage the connection lifecycle properly.
