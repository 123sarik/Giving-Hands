export default function Contact() {
    return (
      <section className="min-h-screen bg-gradient-to-r from-pink-400 via-pink-300 to-purple-200 p-10">
        <h2 className="text-4xl font-bold text-center mb-9 text-black">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          {/* Illustration */}
          <img
            src="/contact1.jpg" // Replace with your actual image path
            alt="Contact Illustration"
            className="w-full md:w-1/3 "
          />
  
          {/* Form */}
          <form className="w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-xl space-y-4">
            <h3 className="text-2xl font-bold text-center">HAVE SOME QUESTIONS?</h3>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-full border border-pink-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-full border border-pink-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="What's your mail?"
              className="w-full px-4 py-2 rounded-full border border-pink-300 focus:outline-none"
            />
            <textarea
              placeholder="Your questions..."
              className="w-full px-4 py-2 rounded-xl border border-pink-300 h-32 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-2 rounded-full hover:shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  