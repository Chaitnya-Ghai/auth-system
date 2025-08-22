import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env file variables
dotenv.config();

const connectDB = async () => {
    try {
        console.log("Mongo URI from .env:", process.env.MONGO_DB_URI);
        const connect = await mongoose.connect(process.env.MONGO_DB_URI, {
        });
        console.log(`Database connected successfully! Host: ${connect.connection.host}`);
    }catch (err) {
        console.error(" Database connection failed:", err.message);
        process.exit(1);
    }
};

export default connectDB;