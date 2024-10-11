import { Button } from "./ui/button";
import InvestmentCarousel from "./InvestmentCarousel";
import PropertyCarousel from "./PropertyCarousel"; // Import PropertyCarousel
import ConstructionTimeline from "./ConstructionTimeline";
import NewsUpdates from "./NewsUpdate";
import ClientTestimonials from "./ClientsTestimonials";
import Header from "./Header";
import HeroSection from "./HeroSection";


// Main HomePage Component
export default function HomePage() {
  return (
    <>
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
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
