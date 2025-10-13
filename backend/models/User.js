import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FullName:{
    type: String,
    },
    email:{
    type: String,
    },
    profile:{
    type: String,
    },
    password:{
    type: String,
    },
    role:{
    type: String,
        enum: ['admin','user'],
        default: 'admin'
    },

},{timestamps:true})

const UserModel = mongoose.model("Users",userSchema)


export default UserModel