import { ChevronLeft, ChevronRight, Bed, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

const properties = [
  { id: 1, image: "/placeholder.svg?height=200&width=300", price: "3.25 Crore", beds: 5, baths: 6, area: "27 Marla", type: "residential", date: "February 21, 2024" },
  { id: 2, image: "/placeholder.svg?height=200&width=300", price: "1.20 Crore", beds: 3, baths: 2, area: "1 Kanal", type: "residential", date: "January 3, 2024" },
  { id: 3, image: "/placeholder.svg?height=200&width=300", price: "7 Crore", beds: 6, baths: 7, area: "2 Kanal", type: "residential", date: "December 18, 2023" },
  { id: 4, image: "/placeholder.svg?height=200&width=300", price: "4.25 Crore", beds: 4, baths: 4, area: "25 Marla", type: "plot", date: "October 5, 2023" },
]

export function PropertyCarousel() {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto space-x-4 p-4">
        {properties.map((property) => (
          <div key={property.id} className="flex-none w-72">
            <div className="relative">
              <img src={property.image} alt={`Property ${property.id}`} className="w-full h-48 object-cover rounded-t-lg" />
              <span className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">{property.type}</span>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow">
              <div className="text-xl font-bold text-green-600 mb-2">PKR {property.price}</div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center"><Bed size={16} className="mr-1" /> {property.beds} Bed</span>
                <span className="flex items-center"><Bath size={16} className="mr-1" /> {property.baths} Bath</span>
                <span className="flex items-center"><Maximize size={16} className="mr-1" /> {property.area}</span>
              </div>
              <div className="text-xs text-gray-500">Posted On: {property.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
        <ChevronLeft size={24} />
      </Button>
      <Button variant="outline" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}