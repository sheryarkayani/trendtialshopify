import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Framer Motion for animations

const investments = [
  {
    id: 1,
    image: "/aprtment.jpg",
    price: "Starting from Rs 11.25 Lac (Total SQFT 300)",
    name: "Milton Apartments",
    location: "Islamabad",
    startingFrom: "45 Lac",
  },
  {
    id: 2,
    image: "/coffeeshop.jpg",
    price: "Get 350,000 Monthly Return",
    name: "Milton Coffee House",
    location: "Islamabad",
    startingFrom: "Starting from Rs 2.55 Crore",
  },
  {
    id: 3,
    image: "/resturant.jpg",
    price: "Starting from Rs 22 Lac",
    name: "Milton Rooftop Space",
    location: "Islamabad",
    startingFrom: "Starting from Rs 3.75 Lac (Total SQFT 50)",
  },
];

export default function InvestmentCarousel() {
  return (
    <div className="relative bg-gradient-to-r from-green-100 via-white to-blue-100 py-16">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800 tracking-wider">
        Top <span className="text-green-600">Investments</span>
      </h2>

      {/* Investment Cards Container */}
      <div className="flex overflow-x-auto space-x-6 px-8 snap-x snap-mandatory">
        {investments.map((investment) => (
          <motion.div
            key={investment.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 snap-center"
            whileHover={{ scale: 1.05 }} // Smooth scaling on hover
          >
            <div className="relative">
              <img
                src={investment.image}
                alt={investment.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {investment.startingFrom && (
                <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded-lg shadow-lg">
                  HOT
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="text-lg font-bold text-green-600 mb-2 tracking-wide">
                {investment.price}
              </div>
              <div className="text-xl font-semibold mb-1 text-gray-800">
                {investment.name}
              </div>
              <div className="text-md text-gray-600">{investment.location}</div>
              {investment.startingFrom && (
                <div className="text-sm text-gray-500 mt-2">
                  Starting from Rs {investment.startingFrom}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Controls */}
      <Button
        variant="outline"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="outline"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
}
