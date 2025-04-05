const AboutUs = () => {
    return (
        <section className="w-full bg-white py-12 px-4 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="/image3.png"
                        alt="About Us"
                        className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    />

                </div>

                {/* Text Content */}
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h2 className="text-4xl font-bold text-[#2D3142] mb-4">About Us</h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        At <span className="font-semibold text-[#FF6B35]">Giving Hands</span>, we believe in the power of generosity. Our mission is to bridge the gap between those who can help and those who need help the most.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We are a community-driven platform built with compassion and transparency. Whether it’s funding education, healthcare, or disaster relief — every donation helps change a life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
