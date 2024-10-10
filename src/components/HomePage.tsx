import { Search, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { PropertyCarousel } from "./PropertyCarousel"
import { InvestmentCarousel } from "./InvestmentCarousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src="/placeholder.svg?height=40&width=120" alt="AGENCY21" className="h-10 w-30 bg-green-600" />
            </div>
            <nav className="hidden md:flex space-x-4">
              {["ABOUT", "PROPERTIES", "PROJECTS", "GALLERY", "BLOG", "CAREERS", "CONTACT"].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input type="text" placeholder="Property ID" className="pl-8 pr-4 py-2 w-40" />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                SEND INQUIRY
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pakistan's Biggest<br />Estate Agency</h1>
          <p className="text-2xl mb-8">Find your new home<br />Search properties for sale and rent</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
              Selling or Renting out?<br />Free Valuation
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Buying, Renting or Invest?<br />Hot Deals
            </Button>
          </div>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Get A Franchise
          </Button>
        </div>
      </main>

      <div className="container mx-auto px-4 py-8">
        <PropertyCarousel />
      </div>

      <div className="container mx-auto px-4 py-8">
        <InvestmentCarousel />
      </div>

      <div className="bg-green-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Input type="text" placeholder="City" className="flex-1 mr-2" />
            <Input type="text" placeholder="Area" className="flex-1 mr-2" />
            <select className="flex-1 mr-2 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <option>All Types</option>
            </select>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">BUY</Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 ml-2">RENT</Button>
          </div>
        </div>
      </div>
    </div>
  )
}