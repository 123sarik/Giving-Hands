// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer";
// import DonationList from "./components/DonationList";
// import DonationForm from "./components/DonationForm";
// import TopDonors from "./components/TopDonors";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col pt-20">
//         {/* Navbar */}
//         <Navbar />

//         {/* Routes */}
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <AboutUs />
//               </>
//             }
//           />

//           {/* About Page */}
//           <Route
//             path="/about"
//             element={
//               <div className="flex flex-col items-center p-6">
//                 <AboutUs />
//               </div>
//             }
//           />

//           {/* Donations Page */}
//           <Route
//             path="/donations"
//             element={
//               <div className="flex flex-col items-center p-6">
//                 {/* 🔥 Improved Heading Section */}
//                 <div className="text-center mb-8">
//                   <h1 className="text-4xl font-bold text-[#FF6B35]">
//                     Support Our Mission
//                   </h1>
//                   <p className="text-gray-700 mt-2 text-lg">
//                     Your donations help us bring positive change to those in need.
//                   </p>
//                 </div>

//                 {/* Donation Form */}
//                 <div id="donate" className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
//                   <DonationForm />
//                 </div>

//                 {/* Top Donors */}
//                 <TopDonors />

//                 {/* Full Donations List */}
//                 <div className="w-full max-w-2xl mt-6">
//                   <DonationList />
//                 </div>
//               </div>
//             }
//           />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DonationList from "./components/DonationList";
import DonationForm from "./components/DonationForm";
import TopDonors from "./components/TopDonors";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col pt-20">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Mission />
                <AboutUs />
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <div className="flex flex-col items-center p-6">
                <AboutUs />
              </div>
            }
          />

          {/* Donations Page */}
          <Route
            path="/donations"
            element={
              <div
                className="flex flex-col items-center py-4 px-2 min-h-[-70vh] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/image4.png')",
                }}
              >
                <div className="w-full bg-white bg-opacity-90 rounded-xl p-3 sm:p-4 max-w-2xl shadow-md">
                  {/* Heading Section */}
                  <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[#FF6B35]">
                      Support Our Mission
                    </h1>
                    <p className="text-gray-700 mt-1 text-base">
                      Your donations help us bring positive change to those in need.
                    </p>
                  </div>

                  {/* Donation Form */}
                  <div id="donate" className="w-full max-w-md mx-auto mb-3">
                    <DonationForm />
                  </div>

                  {/* Top Donors */}
                  <TopDonors />

                  {/* Donations List */}
                  <div className="w-full mt-2">
                    <DonationList />
                  </div>
                </div>
              </div>
            }
          />

          {/* FAQ Page */}
          <Route path="/faq" element={<FAQ />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
