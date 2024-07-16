import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import mongoose from "mongoose";

import UserRoute from "./routes/user-route.js"

dotenv.config()

const app = express();

async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database:", error);
        process.exit(1);
    }
}
connectToMongoDB();

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
    next();
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: "auto"
    }
}))

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.use(UserRoute)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running");
})