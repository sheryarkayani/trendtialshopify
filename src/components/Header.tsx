// components/Header.tsx
import { Button } from "../components/ui/button";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="bg-[#1e6e41] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Avenue5</h1>
        <nav className="space-x-6">
          <a href="/about" className="hover:text-yellow-300">ABOUT</a>
          <a href="/properties" className="hover:text-yellow-300">PROPERTIES</a>
          <a href="/projects" className="hover:text-yellow-300">PROJECTS</a>
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
  );
}
