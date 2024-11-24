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
    Learning Date : nov 7 
               Dependencies
               The following dependencies are

              express: Web framework for Node.js used to create the server and define routes.
              cors: Middleware to enable Cross-Origin Resource Sharing (CORS) and configure it to allow cross-origin requests.
              cookie-parser: Middleware to parse cookies attached to incoming requests.
              

             Middleware Setup
             CORS (Cross-Origin Resource Sharing):

            The application is configured to allow cross-origin requests by using the cors middleware.
            The CORS options are configured with:
            origin: process.env.CORS_ORIGIN: The origin(s) allowed to make requests to the server. The value is dynamically set via an environment variable (CORS_ORIGIN).

            credentials: true: This allows cookies to be sent and received with cross-origin requests, enabling features like sessions and authentication.

            Static File Serving: The app uses the express.static middleware to serve static files from the public directory. Any file within the public folder will be accessible directly via HTTP requests.
            Cookie Parsing:  cookie-parser middleware is applied, enabling the app to parse cookies in incoming requests and make them accessible via req.cookies.
  middleware 
          -> Middleware is a function that sits in between when a request is made and when the response is sent. It lets you do things like logging requests, checking if a user is logged in, or handling errors.
           Execute any code.
           Make changes to the request and the response objects.
           End the request-response cycle.
           Call the next middleware function in the stack.
          ![Screenshot from 2024-11-07 20-15-59](https://github.com/user-attachments/assets/d56d8f64-1cb8-4359-a9e1-bf6ab0918847)
          
 Cloudinary File Upload - Documentation
           Overview
           This module is designed to handle the upload of local files to Cloudinary using Cloudinary's Node.js SDK. The uploadToCloudinary function uploads a file to Cloudinary and returns the file's URL or null in case of an error. 
           Additionally, it ensures that the local file is deleted after the upload process, whether the upload succeeds or fails.
           
           Dependencies
                     cloudinary: Official Node.js SDK for Cloudinary.
                     fs: Node.js File System module for handling file operations.
                     
           Cloudinary Configuration:
                     The Cloudinary configuration uses environment variables for cloud_name, api_key, and api_secret to authenticate requests.
                     The cloudinary.config() method is called with these values to initialize the connection with Cloudinary's API.
                      cloudinary.config({
                               cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                               api_key: process.env.CLOUDINARY_API_KEY,
                               api_secret: process.env.CLOUDINARY_API_SECRET
                               });
          Uploading the File:
                     The cloudinary.uploader.upload() method is used to upload the file. The resource_type: "auto" option allows Cloudinary to auto-detect the type of the file (image, video, etc.).

          Cleaning Up Local Files:
                     Whether the upload succeeds or fails, the local file is removed using fs.promises.unlink().
                     This is an asynchronous operation, ensuring that the event loop is not blocked while cleaning up temporary files.
                     await fs.promises.unlink(localFilePath);



registerUser Controller
                    Notes 
                    Input Validation:
                    Purpose: Ensure that all required fields are present in the request body.
                    The function destructures funllName, email, userName, and password from the request body (req.body).
                    The code checks if any of these fields are empty or contain only whitespace. If any of these fields are invalid, an error is thrown using the ApiErrors class with a status of 400 (Bad Request).
                    Validation Error Message: "All fields are required."

                    Check for Existing User:
                    Purpose: Prevent duplicate users from registering.
                    The function checks if a user with the same email or userName already exists in the database. If a user is found with either of these values, an error is thrown.
                    Error Message: "User already exists."

                    User Creation in the Database:
                    Purpose: Create a new user record in the MongoDB database.
                    The function constructs a new user object with the following fields:
                    fullName: The full name of the user.
                    avatar: URL of the uploaded avatar image.
                    coverImage: URL of the uploaded cover image (if available).
                    email: The user's email address.
                    password: The user's password (presumably hashed before this step, though that logic is not shown here).
                    userName: The user's username (converted to lowercase to ensure uniqueness).
                    The user record is created in the database with User.create().
                    Note: Password is not included in the response (it is omitted during the user query to return only relevant user data).

                    uploadOnCloudnairy:  
                                    A helper function (presumably defined elsewhere) that uploads image files to Cloudinary and returns the file URL.
                                    
 Aggregation Pipeline:
                    An Aggregation Pipeline is a framework in MongoDB used to process and transform data in a series of stages, resulting in a computed output. It allows complex queries, transformations, and data manipulations, such as 
                    filtering, grouping, sorting, and reshaping data. Aggregation pipelines are often used to analyze data and generate reports in a flexible and efficient manner.

                    Key Concepts in MongoDB Aggregation Pipeline
                    Pipeline: The aggregation framework processes data in a sequence of stages, where each stage transforms the data in some way. The stages are connected to form a pipeline, and the output of one stage becomes the input 
                    for the next.

                    Stages: Each stage performs a specific operation on the documents in the collection. Common stages include:

                    $match: Filters the documents to pass only those that match the specified conditions.
                    $group: Groups documents by a specified identifier and performs aggregate operations, like sum, average, count, etc.
                    $project: Reshapes documents by including or excluding fields or computing new fields.
                    $sort: Sorts documents in ascending or descending order based on specified fields.
                    $limit: Limits the number of documents passed to the next stage.
                    $skip: Skips the specified number of documents before passing the remaining documents.
                    $unwind: Deconstructs an array field into separate documents for each element of the array.
                    $lookup: Performs a left outer join with another collection to combine data from multiple collections.
