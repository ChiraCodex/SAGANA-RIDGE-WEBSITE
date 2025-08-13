"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/1.jpg", description: "Modern 3-Bedroom Bungalow" },
    { src: "/images/2.jpg", description: "Elegant Flat Roof Design" },
    { src: "/images/3.jpg", description: "Spacious Open Living Area" },
    { src: "/images/4.jpg", description: "Country Style Roof Exterior" },
    { src: "/images/5.jpg", description: "Luxury Villa Poolside View" },
    { src: "/images/6.jpg", description: "Minimalist Kitchen Design" },
    { src: "/images/7.jpg", description: "Contemporary Garden Patio" },
    { src: "/images/8.jpg", description: "4-Bedroom Villa Floor Plan" },
    { src: "/images/9.jpg", description: "Country Roof Farmhouse" },
    { src: "/images/10.jpg", description: "Elegant Entrance Porch" },
    { src: "/images/11.jpg", description: "Modern Bedroom Interior" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // For sliding effect, we offset translateX based on index
  const getSlideStyle = (index: number) => {
    const offset = (index - currentIndex + images.length) % images.length;
    if (offset === 0) return "translate-x-0 scale-100 opacity-100 z-20";
    if (offset === 1 || (currentIndex === images.length - 1 && index === 0))
      return "translate-x-[70%] scale-90 opacity-80 z-10";
    if (offset === images.length - 1 || (currentIndex === 0 && index === images.length - 1))
      return "-translate-x-[70%] scale-90 opacity-80 z-10";
    return "opacity-0 scale-75 z-0";
  };

  return (
    <div id="gallery" className="px-4 md:px-10 lg:px-20 py-20">
      <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary text-center">
        Project Gallery
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-30 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          ❮
        </button>

        <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-[60%] h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${getSlideStyle(index)}`}
            >
              <Image
                src={img.src}
                alt={img.description}
                fill
                className="object-cover"
              />
              {index === currentIndex && (
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm sm:text-lg">
                  {img.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-30 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
