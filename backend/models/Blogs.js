import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
}, { timestamps: true });


const PostModel = mongoose.model('posts',PostSchema)

export default PostModel