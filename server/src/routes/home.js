import express from "express";
import { PostModel } from "../models/Posts.js";

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
        const allPosts = await PostModel.find(); // Fetch all posts from the database
        console.log(allPosts);
        res.json(allPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export { router as HomeRouter };
