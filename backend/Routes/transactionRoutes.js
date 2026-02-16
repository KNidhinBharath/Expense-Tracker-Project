import express from "express";
import auth from "../middleware/auth.js";
import {
 createTransaction,
 updateTransaction,
 deleteTransaction,
 getTransactions
} from "../Controllers/transactionController.js";

const router = express.Router();

router.get("/",auth,getTransactions);
router.post("/",auth,createTransaction);
router.put("/:id",auth,updateTransaction);
router.delete("/:id",auth,deleteTransaction);

export default router;
