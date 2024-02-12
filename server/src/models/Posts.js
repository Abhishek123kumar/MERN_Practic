import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    "title": { type: String, required: true, unique: true },
    "body": { type: String, required: true }
});
export const PostModel = mongoose.model("posts", postSchema);
