// import { useState } from "react";
// import axios from "axios";

// const DonationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     amount: "",
//     message: "",
//   });

//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setSuccess("");
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/api/donations/razorpay", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: formData.amount }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create Razorpay order");
//       }

//       const order = await response.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID || "your_fallback_test_key_here",
//         amount: order.amount,
//         currency: order.currency,
//         order_id: order.id,
//         handler: async function (response) {
//           alert("Payment successful! Transaction ID: " + response.razorpay_payment_id);
//           setSuccess("Donation successful! Thank you!");
//           await axios.post("http://localhost:5000/api/donations", formData);
//           setFormData({ name: "", email: "", amount: "", message: "" });
//         },
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//         },
//         theme: {
//           color: "#FF6B35",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       setError("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Make a Donation</h2>

//         {success && <p className="text-green-600 text-center">{success}</p>}
//         {error && <p className="text-red-600 text-center">{error}</p>}

//         <form onSubmit={handlePayment} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Donation Amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message (Optional)"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
//           >
//             Donate with Razorpay
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DonationForm;





// 








import { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/donations/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Razorpay order");
      }

      const order = await response.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "your_fallback_test_key_here",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: async function (response) {
          alert("Payment successful! Transaction ID: " + response.razorpay_payment_id);
          setSuccess("🎉 Donation successful! Thank you!");
          await axios.post("http://localhost:5000/api/donations", formData);
          setFormData({ name: "", email: "", amount: "", message: "" });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#FF6B35",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-xl">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-[#2D3142] text-center mb-6">💖 Make a Donation</h2>

        {success && <p className="text-green-600 text-center mb-4 font-medium">{success}</p>}
        {error && <p className="text-red-600 text-center mb-4 font-medium">{error}</p>}

        <form onSubmit={handlePayment} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Donation Amount (₹)</label>
            <input
              type="number"
              name="amount"
              placeholder="Donation Amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message (Optional)</label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              rows={3}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B35] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#e85c2c] transition duration-300"
          >
            Donate with Razorpay
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
