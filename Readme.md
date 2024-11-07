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

