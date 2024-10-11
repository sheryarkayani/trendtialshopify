import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahsan Kayani",
    image: "/placeholder.svg?height=100&width=100",
    text: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. consectetur adipiscing elit",
    rating: 4,
  },
  {
    name: "Ahsan Kayani",
    image: "/placeholder.svg?height=100&width=100",
    text: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. consectetur adipiscing elit",
    rating: 4,
  },
  {
    name: "Ahsan Kayani",
    image: "/placeholder.svg?height=100&width=100",
    text: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. consectetur adipiscing elit",
    rating: 3,
  },
  {
    name: "Ahsan Kayani",
    image: "/placeholder.svg?height=100&width=100",
    text: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. consectetur adipiscing elit",
    rating: 4,
  },
];

export default function ClientTestimonials() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        WHAT <span className="text-[#c8a45d]">OUR CLIENT</span> SAY?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}