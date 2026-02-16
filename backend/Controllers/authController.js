import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
  const {name,email,password} = req.body;

  const hash = await bcrypt.hash(password,10);
  await User.create({name,email,password:hash});

  res.json({msg:"Registered"});
};

export const login = async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(400).json({msg:"No user"});

  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(400).json({msg:"Wrong password"});

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

  res.json({token});
};
