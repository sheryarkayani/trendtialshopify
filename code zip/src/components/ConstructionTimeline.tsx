import Image from "next/image";
import { Button } from "./ui/button"; // Assuming Button is in the ui folder

const ConstructionTimeline = () => {
  return (
    <section className="construction-timeline bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box: Crane and Milestones */}
        <div className="crane-timeline">
          <div className="relative w-full h-96">
            <Image
              src="/crane1.png"
              alt="Construction Crane"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="milestones mt-8">
            <div className="milestone mb-6">
              <h3 className="text-4xl font-bold">2026</h3>
              <p className="text-lg">Project Delivery</p>
            </div>

            <div className="milestone mb-6">
              <h3 className="text-4xl font-bold">2024</h3>
              <p className="text-lg">Gray Structure Completion</p>
            </div>
            
            <div className="milestone mb-6">
              <h3 className="text-4xl font-bold">2022</h3>
              <p className="text-lg">Ground Breaking</p>
            </div>
          </div>
        </div>

        {/* Right Box: Video Section */}
        <div className="video-section">
          <div className="video-preview mb-8">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/Wzgv4IrjzjU"
              title="Construction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-description text-center">
            <p className="mb-4 text-lg">Watch the construction of the complex in real time</p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white">Book Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTimeline;
