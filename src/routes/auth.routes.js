import express from "express";
import {login} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Hello world");
    res.json({ message: "Auth endpoint working" });
})

router.post("/login",login);

export default router;