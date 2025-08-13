import Image from "next/image";
import logo from '../../../public/images/SaganaRidge-logo.png';
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <main className="px-4 md:px-10 lg:px-20 bg-accent-gray p-6">
      <footer className="flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Logo & About */}
        <div className="flex-1 flex flex-col gap-4">
          <Image 
            src={logo} 
            alt="logoImage" 
            placeholder="blur" 
            width={120} 
            height={60} 
          />
          <p className="text-sm md:text-base">
            Secure your future with affordable plots at Sagana Ridge. Ideal for home or investment. Prime location, ready titles.
          </p>
          <div className="flex gap-4 mt-2 text-xl">
            <Instagram className="cursor-pointer hover:text-brand-secondary transition"/>
            <Facebook className="cursor-pointer hover:text-brand-secondary transition"/>
            <Mail className="cursor-pointer hover:text-brand-secondary transition"/>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <p className="font-bold text-xl mb-2">Quick Links</p>
          <nav className="grid gap-2">
            <a className="text-black hover:text-brand-secondary" href="#details">Project Details</a>
            <a className="text-black hover:text-brand-secondary" href="#features">Why Choose Sagana Ridge</a>               
            <a className="text-black hover:text-brand-secondary" href="#gallery">Gallery</a>
            <a className="text-black hover:text-brand-secondary" href="#news">News</a>
            <a className="text-black hover:text-brand-secondary" href="#contacts">Contacts</a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <p className="font-bold mb-1">Newsletter</p>
          <span className="text-xs mb-2 block">
            Subscribe to our newsletter to get project progress updates
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              className="p-2 rounded-xl flex-1 border-2 border-gray-300" 
              type="email" 
              placeholder="Enter Email..." 
            />
            <button className="border-2 bg-accent-green p-2 rounded-xl text-white font-bold hover:bg-brand-secondary transition">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
