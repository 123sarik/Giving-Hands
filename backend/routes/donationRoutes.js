const express = require("express");
const Donation = require("../models/Donation"); 
const Razorpay = require("razorpay");
require("dotenv").config(); // Load environment variables

const router = express.Router();

// ✅ Initialize Razorpay with environment variables
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,  
    key_secret: process.env.RAZORPAY_SECRET,
});

// ✅ Route: Create a new donation
router.post("/", async (req, res) => {
    try {
        const { name, email, amount, message } = req.body;

        if (!name || !email || !amount) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newDonation = new Donation({ name, email, amount, message });
        await newDonation.save();
        res.status(201).json({ message: "Donation successful!", donation: newDonation });

    } catch (error) {
        console.error("Donation Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Route: Get all donations (Fixed!)
router.get("/", async (req, res) => {
    try {
        const donations = await Donation.find(); // ✅ Fetch from MongoDB
        res.json(donations);
    } catch (error) {
        console.error("Error fetching donations:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Route: Create Razorpay Order
router.post("/razorpay", async (req, res) => {
    try {
        const { amount } = req.body;
        const options = {
            amount: amount * 100, // Convert to paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            payment_capture: 1,
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        res.status(500).json({ error: "Payment failed" });
    }
});

module.exports = router;
