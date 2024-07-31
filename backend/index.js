import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import MongoStore from "connect-mongo"
import connectToMongoDB from "./config/database.js"

import UserRoute from "./routes/user-route.js"
import AuthRoute from "./routes/auth-route.js"
import CarRoute from "./routes/car-route.js"
import ContactRoute from "./routes/contactUs-route.js"
import TestimonialRoute from "./routes/testimonial-route.js"
import PesananRoute from "./routes/pesanan-route.js"

dotenv.config()

const app = express();


connectToMongoDB().then(() => {
    app.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        });
    });
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
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
app.use(AuthRoute)
app.use(CarRoute)
app.use(ContactRoute)
app.use(TestimonialRoute)
app.use(PesananRoute)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running");
})