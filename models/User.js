import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: String,
  passwordHash: String,
  balance: Number,
  portfolio: Object,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
