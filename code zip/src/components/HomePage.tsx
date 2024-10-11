import { Button } from "./ui/button";
import { Input } from "./ui/input";
import InvestmentCarousel from "./InvestmentCarousel";
import PropertyCarousel from "./PropertyCarousel"; // Import PropertyCarousel
import ConstructionTimeline from "./ConstructionTimeline";
import NewsUpdates from "./NewsUpdate";
import ClientTestimonials from "./ClientsTestimonials";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Video Background Section */}
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="https://images.graana.com/video/upload/agency21/2_1/1655993188.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="bg-[#1e6e41] text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">AGENCY21</h1>
              <nav className="space-x-6">
                <a href="/about" className="hover:text-yellow-300">ABOUT</a>
                <a href="/properties" className="hover:text-yellow-300">PROPERTIES</a>
                <a href="/projects" className="hover:text-yellow-300">PROJECTS</a>
                <a href="/gallery" className="hover:text-yellow-300">GALLERY</a>
                <a href="/blog" className="hover:text-yellow-300">BLOG</a>
                <a href="/careers" className="hover:text-yellow-300">CAREERS</a>
                <a href="/contact" className="hover:text-yellow-300">CONTACT</a>
              </nav>
              <div className="flex items-center space-x-2">
                <Input type="text" placeholder="Property ID" className="w-32 bg-white text-black" />
                <Button variant="outline" className="bg-[#2e8b57] text-white hover:bg-[#236e44]">SEND INQUIRY</Button>
              </div>
            </div>
          </header>
          
          <main className="flex-grow flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-6xl font-bold mb-4">Pakistan's Biggest<br />Estate Agency</h1>
              <p className="text-2xl mb-8">
                <span className="text-yellow-300">Find your new home</span><br />
                Search properties for sale and rent
              </p>
              <div className="space-x-4 mb-8">
                <Button variant="outline" className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white">
                  Selling or Renting out?<br />Free Valuation
                </Button>
                <Button className="bg-[#2e8b57] hover:bg-[#236e44] text-white">
                  Buying, Renting or Invest?<br />Hot Deals
                </Button>
              </div>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Get A Franchise</Button>
              <div className="mt-16 bg-white bg-opacity-20 p-4 rounded-lg flex items-center space-x-2 max-w-4xl w-full">
                <select className="bg-white text-black rounded px-4 py-2 flex-grow">
                  <option>City</option>
                </select>
                <select className="bg-white text-black rounded px-4 py-2 flex-grow">
                  <option>Area</option>
                </select>
                <select className="bg-white text-black rounded px-4 py-2 flex-grow">
                  <option>All Types</option>
                </select>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8">BUY</Button>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8">RENT</Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Section 2: Investment Carousel Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <InvestmentCarousel />
        </div>
      </div>

      {/* Section 3: Construction Timeline Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <ConstructionTimeline />
        </div>
      </div>

      {/* Section 4: Property Carousel Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <PropertyCarousel />
        </div>
      </div>

      {/* Section 5: News/Updates Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <NewsUpdates />
        </div>
      </div>

      {/* Section 6: Client Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <ClientTestimonials />
        </div>
      </div>
    </>
  );
}
