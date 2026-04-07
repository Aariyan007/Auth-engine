import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) =>{
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({message:'Unauthorized'});
    }
    
}