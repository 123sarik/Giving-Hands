const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const donationRoutes = require("./routes/donationRoutes");

const app = express();

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Enable JSON parsing

app.use(express.urlencoded({ extended: true }));


// ✅ Define API routes (Use only one base route)
app.use("/api/donations", donationRoutes);

// ✅ Test route (Check if backend is working)
app.get("/", (req, res) => {
    res.send("🚀 Donation API is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

