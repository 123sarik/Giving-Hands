// // src/components/TopDonors.jsx
// import { useEffect, useState } from "react";

// const TopDonors = () => {
//   const [topDonors, setTopDonors] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/donations")
//       .then((res) => res.json())
//       .then((data) => {
//         const sorted = data
//           .sort((a, b) => b.amount - a.amount)
//           .slice(0, 5); // Top 5
//         setTopDonors(sorted);
//       })
//       .catch((err) => console.error("Error fetching top donors:", err));
//   }, []);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 my-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4 text-[#FF6B35]">
//         🌟 Top Donors 🌟
//       </h2>
//       <ul className="space-y-3">
//         {topDonors.map((donor, idx) => (
//           <li
//             key={donor._id}
//             className="bg-[#FFD166] text-[#2D3142] px-4 py-2 rounded-lg flex justify-between items-center shadow"
//           >
//             <span className="font-semibold">
//               {idx + 1}. {donor.name}
//             </span>
//             <span className="font-bold">${donor.amount}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TopDonors;



import { useEffect, useState } from "react";

const TopDonors = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/donations/top");
        const data = await res.json();
        setTopDonors(data);
      } catch (err) {
        console.error("Error fetching top donors:", err);
      }
    };

    fetchDonors();
  }, []);

  if (!topDonors.length) return null;

  return (
    <div className="w-full max-w-2xl mt-10 p-6 bg-yellow-50 border border-yellow-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-[#FF6B35] mb-4 text-center">
        🏆 Top Donors
      </h2>
      <ul className="space-y-3">
        {topDonors.map((donor, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium text-gray-800">
              {donor.name || "Anonymous"}
            </span>
            <span className="text-green-600 font-semibold">
              ${donor.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopDonors;
