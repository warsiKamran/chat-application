import mongoose from "mongoose";
import {DB_NAME} from "../constants/dbName.js";

const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB connected !! DB Host : ${connectionInstance.connection.host}`);
    } 
    catch (error) {
        console.log("MONGODB connection error ", error);
    }
}
export default connectDB;

