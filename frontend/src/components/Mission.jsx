import { CheckCircle, Target, Heart } from "lucide-react";

const missions = [
  {
    title: "Education",
    quote: "“Education is the key to unlocking the golden door of freedom.”",
    image: "/education.png",
    icon: <CheckCircle size={48} className="text-lime-500 mb-4" />,
  },
  {
    title: "Nutrition",
    quote: "“A healthy outside starts from the inside.”",
    image: "/nutrition.jpg",
    icon: <Target size={48} className="text-sky-500 mb-4" />,
  },
  {
    title: "Livelihood",
    quote: "“Empowering people changes everything.”",
    image: "/livelihood.jpg",
    icon: <Heart size={48} className="text-red-500 mb-4" />,
  },
];

const Mission = () => {
  return (
    <section className="bg-yellow-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🎯 Our Mission</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {missions.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front bg-gradient-to-br from-pink-100 via-white to-yellow-100 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 italic text-sm"> {item.quote} </p>
              </div>

              {/* Back (image only) */}
              <div
                className="flip-card-back"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;

