import mongoose, { model } from "mongoose";
import { type } from "os";

const user = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
} , {timestamps: true});

export default mongoose.model("User", user);