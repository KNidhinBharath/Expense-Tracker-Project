import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";

export const getDashboard = async(req,res)=>{

  const userId = new mongoose.Types.ObjectId(req.user.id);

  const total = await Transaction.aggregate([
    {$match:{userId}},
    {$group:{_id:null,total:{$sum:"$amount"}}}
  ]);

  const category = await Transaction.aggregate([
    {$match:{userId}},
    {$group:{_id:"$category",total:{$sum:"$amount"}}}
  ]);

  const recent = await Transaction.find({userId})
    .sort({createdAt:-1})
    .limit(5);

  res.json({
    total: total[0]?.total || 0,
    category,
    recent
  });
};
