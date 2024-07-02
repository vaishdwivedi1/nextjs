import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  img: String,
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now  // Default value set to the current timestamp when a document is created
  }
});

export const dbblog = mongoose.models.dbblog || mongoose.model("dbblog", userSchema);