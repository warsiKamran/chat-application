import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/features.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config({
    path: './.env'
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
});


import user from "./routes/user.js"

app.use("/api/v1", user);


export default app;

