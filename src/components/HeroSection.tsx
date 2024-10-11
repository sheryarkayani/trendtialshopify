import { Button } from "../components/ui/button";

// Extract HeroSection component
function HeroSection() {
  return (
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
        <main className="flex-grow flex items-center justify-center">
          <div className="container mx-auto flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-6xl font-bold mb-4">Bahria Town's Leading<br />Highrise Developer</h1>
            <p className="text-2xl mb-8">
              <span className="text-yellow-300">Find your new home</span><br />
              Search properties for sale and rent in Bahria Town
            </p>
            <div className="space-x-4 mb-8">
              <Button variant="outline" className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white">
                Selling or Renting out?<br />Free Valuation
              </Button>
              <Button className="bg-[#2e8b57] hover:bg-[#236e44] text-white">
                Buying, Renting or Invest?<br />Hot Deals
              </Button>
            </div>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Looking for Highrise Investment</Button>
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
  );
}

export default HeroSection;
