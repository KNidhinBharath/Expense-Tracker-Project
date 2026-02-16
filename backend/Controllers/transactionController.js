import Transaction from "../models/Transaction.js";

export const createTransaction = async(req,res)=>{
  const t = await Transaction.create({
    ...req.body,
    userId:req.user.id
  });
  res.json(t);
};

export const updateTransaction = async(req,res)=>{
  const t = await Transaction.findOneAndUpdate(
    {_id:req.params.id,userId:req.user.id},
    req.body,
    {new:true}
  );
  res.json(t);
};

export const deleteTransaction = async(req,res)=>{
  await Transaction.findOneAndDelete({
    _id:req.params.id,
    userId:req.user.id
  });
  res.json({msg:"Deleted"});
};

export const getTransactions = async(req,res)=>{

  const {page=1,limit=10,search,category} = req.query;

  const query={userId:req.user.id};

  if(search){
    query.title={$regex:search,$options:"i"};
  }

  if(category){
    query.category=category;
  }

  const data = await Transaction.find(query)
    .sort({date:-1})
    .skip((page-1)*limit)
    .limit(Number(limit));

  res.json({data,page});
};
