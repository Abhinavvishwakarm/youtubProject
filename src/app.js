import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true,
}));
app.use(express.static("public"))
app.use(cookieParser());


// import routes //
import userRoutes from './routes/user.routes.js'

// routes declaration //

app.use('/api/v1/users', userRoutes);
export {app};