import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

// routers
import authRoute from './routes/auth.router.js';
import userRoute from './routes/user.router.js';
import reviewRouter from './routes/review.router.js';
import orderRouter from './routes/order.router.js';
import messageRouter from './routes/message.router.js';
import gigRouter from './routes/gig.router.js';
import conversationRouter from './routes/conversation.router.js';

// cookie parser
import cookieParser from "cookie-parser";
// cors
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

// enable cors
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));

// if use json from client side - allow to use jso in index
app.use(express.json());

// middleware
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/review", reviewRouter);
app.use("/api/order", orderRouter);
app.use("/api/message", messageRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/conversation", conversationRouter);

// error handling missleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const messageStatus = err.message || "Somthing went wrong!";

    return res.status(errorStatus).send(messageStatus);
});

app.listen(8800, () => {
    connect();
    console.log("Backend server is running!")
})
