import { Facebook, Twitter, Instagram, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#2D3142] text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#FF6B35]">Giving Hands</h2>
          <p className="mt-2 text-sm text-gray-300">
            Empowering lives through generosity. Every donation counts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-[#FF6B35] transition">Home</a></li>
            <li><a href="#donate" className="hover:text-[#FF6B35] transition">Donate</a></li>
            <li><a href="/donations" className="hover:text-[#FF6B35] transition">View Donations</a></li>
            <li><a href="/about" className="hover:text-[#FF6B35] transition">About Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-[#FF6B35] transition"><Facebook /></a>
            <a href="#" className="hover:text-[#FF6B35] transition"><Twitter /></a>
            <a href="#" className="hover:text-[#FF6B35] transition"><Instagram /></a>
            <a href="mailto:info@givinghands.org" className="hover:text-[#FF6B35] transition"><Mail /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Giving Hands. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
