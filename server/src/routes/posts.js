import express from 'express';
import { PostModel } from '../models/Posts.js';

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { title, body } = req.body;
        const newpost = new PostModel({ title, body });
        await newpost.save();
        console.log(newpost);
        res.json({ message: "Post created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


export { router as PostRouter };
