import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const investments = [
  { id: 1, image: "/placeholder.svg?height=200&width=300", price: "30 Crore", name: "IMARAT Builders Mall", location: "Islamabad", startingFrom: "52 Lac" },
  { id: 2, image: "/placeholder.svg?height=200&width=300", price: "Starting from Rs 2.55 Crore", name: "IMARAT Residences", location: "Islamabad" },
  { id: 3, image: "/placeholder.svg?height=200&width=300", price: "Starting from Rs 22 Lac", name: "Amazon Outlet Mall", location: "Islamabad" },
  { id: 4, image: "/placeholder.svg?height=200&width=300", price: "Starting from Rs 43 Lac", name: "Grand Bazar", location: "Islamabad" },
]

export function InvestmentCarousel() {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">Investments</h2>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {investments.map((investment) => (
          <div key={investment.id} className="flex-none w-72">
            <div className="relative">
              <img src={investment.image} alt={investment.name} className="w-full h-48 object-cover rounded-t-lg" />
              {investment.startingFrom && (
                <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">HOT</span>
              )}
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow">
              <div className="text-xl font-bold text-green-600 mb-2">{investment.price}</div>
              <div className="text-sm font-semibold mb-1">{investment.name}</div>
              <div className="text-xs text-gray-600">{investment.location}</div>
              
              {investment.startingFrom && (
                <div className="text-sm text-gray-600 mt-2">Starting from Rs {investment.startingFrom}</div>
              )}
              <img src="/placeholder.svg?height=30&width=80" alt="Agency21 Logo" className="mt-2 h-6" />
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