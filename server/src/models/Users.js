import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "password": { type: String, required: true },
    "email": { type: String, unique:true,required: true }
});
export const UserModel = new mongoose.model("users", UserSchema);
