import { useEffect, useState } from "react";

const DonationsList = () => {
  const [donations, setDonations] = useState([]);
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/donations")
      .then((response) => response.json())
      .then((data) => {
        const reversed = [...data].reverse(); // Latest first
        setDonations(reversed);

        const top = [...data]
          .filter((d) => d.name && d.amount)
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 5);
        setTopDonors(top);
      })
      .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  return (
    <div className="p-6">
      {/* 💎 Top Donors */}
      {topDonors.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#2D3142]">🏆 Top Donors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topDonors.map((donor) => (
              <div
                key={donor._id}
                className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 shadow hover:shadow-md transition"
              >
                <h3 className="font-bold text-[#FF6B35]">{donor.name}</h3>
                <p className="text-green-700 font-semibold">₹{donor.amount}</p>
                <p className="text-sm text-gray-700 italic">
                  {donor.message || "No message"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 💖 Recent Donations */}
      <h1 className="text-3xl font-bold text-center mb-6 text-[#2D3142]">💖 Recent Donors</h1>

      {donations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#FF6B35] hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-[#2D3142]">{donation.name}</h2>
              <p className="text-sm text-gray-600 mt-1">Donated: ₹{donation.amount}</p>
              {donation.message && (
                <p className="mt-2 italic text-gray-500 text-sm">“{donation.message}”</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No donations found.</p>
      )}
    </div>
  );
};

export default DonationsList;


// import { useEffect, useState } from "react";

// const TopDonors = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/donations")
//       .then((res) => res.json())
//       .then((data) => {
//         const sorted = [...data]
//           .filter((d) => d.name && d.amount)
//           .sort((a, b) => b.amount - a.amount)
//           .slice(0, 5); // Show top 5
//         setDonations(sorted);
//       })
//       .catch((err) => console.error("Error loading top donors:", err));
//   }, []);

//   if (!donations.length) return null;

//   return (
//     <div className="w-full max-w-xl mt-8 mb-6">
//       <h2 className="text-2xl font-bold mb-4 text-center text-[#2D3142]">🏆 Top Donors</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {donations.map((donor) => (
//           <div
//             key={donor._id}
//             className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 shadow hover:shadow-md transition"
//           >
//             <h3 className="font-bold text-[#FF6B35]">{donor.name}</h3>
//             <p className="text-green-700 font-semibold">${donor.amount}</p>
//             <p className="text-sm text-gray-700 italic">
//               {donor.message || "No message"}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopDonors;
