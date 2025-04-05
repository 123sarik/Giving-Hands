import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your_publishable_key_here"); // Replace with your Stripe public key

const StripePayment = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handlePayment = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/create-checkout-session", {
        amount: amount,
      });

      const { sessionId } = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Complete Your Donation</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : `Pay $${amount} with Stripe`}
      </button>
    </div>
  );
};

export default StripePayment;
