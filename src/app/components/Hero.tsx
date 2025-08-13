import Image from "next/image";
import heroBg from '../../../public/images/bg.jpg';
import {  MouseIcon } from "lucide-react";

export default function Hero() {
  return (
    <main id="home" className="relative w-full h-screen pt-32">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="heroBg Image"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center top-28 h-full text-center px-4 md:px-20">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-brand-primary mb-6">
          Experience Lifestyle Living at Sagana Ridge
        </h1>
        <i className="text-lg md:text-3xl text-white mb-6">
          Where modern comfort seamlessly blends with the tranquility of nature.
        </i>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="p-4 bg-brand-primary text-xl text-white hover:rounded-2xl transition">
            <a href="#features">
              Start Your Journey
            </a>
          </button>
          <button className="p-4 bg-brand-secondary text-xl text-white hover:rounded-2xl transition">
            <a href="#contacts">
              Schedule a Visit
            </a>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <a href="#about" className="animate-bounce">
          <MouseIcon size={40} className="text-white" />
        </a>
      </div>

    </main>
  );
}
