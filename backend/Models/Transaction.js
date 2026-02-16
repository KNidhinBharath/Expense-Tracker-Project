import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  amount: Number,
  category: String,
  date: Date,
  notes: String
}, { timestamps: true });

transactionSchema.index({ userId:1, date:-1 });

export default mongoose.model("Transaction", transactionSchema);
