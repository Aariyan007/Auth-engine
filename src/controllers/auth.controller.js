import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import generateToken from "../utils/jwt.js";

const login = async(req,res) =>{
    const {email,password} = req.body;

    const user = {
        id: "123",
        email:"abcd@gmail.com",
        password: await bcrypt.hash(password,10)
    }

    if(email !== user.email){
        res.status(400).json({message:"Invalid email"});
        return;
    }
    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        res.status(400).json({message:"Invalid password"});
    }
    const token = generateToken(user);

    res.json({token});

}

export {login};