import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  balance: Number,
  portfolio: mongoose.Schema.Types.Mixed,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
