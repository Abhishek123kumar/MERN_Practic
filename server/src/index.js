import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/users.js";
import { PostRouter } from "./routes/posts.js";
import { HomeRouter } from "./routes/home.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", UserRouter);
app.use("/post", PostRouter);
app.use("/home", HomeRouter);
app.listen(3001, () => console.log("SERVER STARTED"));
const url = "mongodb+srv://chsianabhishekiitg:chsianabhishekiitg@recipes.p7lqs3z.mongodb.net/recipes?retryWrites=true&w=majority"
mongoose.connect(url).then(() => console.log("db connected"));
