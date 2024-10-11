import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const investments = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x250",
    price: "30 Crore",
    name: "IMARAT Builders Mall",
    location: "Islamabad",
    startingFrom: "52 Lac",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x250",
    price: "Starting from Rs 2.55 Crore",
    name: "IMARAT Residences",
    location: "Islamabad",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x250",
    price: "Starting from Rs 22 Lac",
    name: "Amazon Outlet Mall",
    location: "Islamabad",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x250",
    price: "Starting from Rs 43 Lac",
    name: "Grand Bazar",
    location: "Islamabad",
  },
];

export default function InvestmentCarousel() {
  return (
    <div className="relative bg-white py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Investments</h2>
      <div className="flex overflow-x-auto space-x-6 px-8">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg"
          >
            <div className="relative">
              <img
                src={investment.image}
                alt={investment.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {investment.startingFrom && (
                <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                  HOT
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-green-600 mb-2">
                {investment.price}
              </div>
              <div className="text-md font-semibold mb-1">{investment.name}</div>
              <div className="text-sm text-gray-600">{investment.location}</div>
              {investment.startingFrom && (
                <div className="text-sm text-gray-600 mt-2">
                  Starting from Rs {investment.startingFrom}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Carousel controls */}
      <Button
        variant="outline"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="outline"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
}
