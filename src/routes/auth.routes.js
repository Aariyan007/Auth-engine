import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Hello world");
    res.json({ message: "Auth endpoint working" });
})

export default router;