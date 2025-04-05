const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Enforce unique emails
  amount: { type: Number, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);

