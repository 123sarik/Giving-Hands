import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[99vh] flex flex-col justify-center items-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: "url('/image2.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Make a Difference Today</h1>
        <p className="text-lg mb-6">
          Your contribution helps bring change. Every donation makes a difference in someone's life.
        </p>

        {/* ✅ Updated Button using React Router */}
        <Link
          to="/donations"
          className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg shadow hover:bg-[#e85c2c] transition"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
