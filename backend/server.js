import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Backend API is running 🚀");
});


app.use("/api/auth",authRoutes);
app.use("/api/transactions",transactionRoutes);
app.use("/api/dashboard",dashboardRoutes);

app.listen(5000,()=>console.log("Server running"));
