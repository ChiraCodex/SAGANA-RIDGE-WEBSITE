"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/1.jpg", description: "Ongoing Construction of Gatehouse" },
    { src: "/images/2.jpg", description: "View of the Main Gate" },
    { src: "/images/3.jpg", description: "Proposed Gatehouse under construction" },
    { src: "/images/5.jpg", description: "Ongoing Construction at Sagana Ridge" },
    { src: "/images/6.jpg", description: "Beacon Markings" },
    { src: "/images/7.jpg", description: "Water Feature inside Sagana Ridge" },
    { src: "/images/8.jpg", description: "Chainlink Fence Surrounding the Project" },
    { src: "/images/9.jpg", description: "Site Meeting at Sagana Ridge" },
    { src: "/images/10.jpg", description: "Spectacular Lanscape Views from Sagana Ridge" },
    { src: "/images/11.jpg", description: "Ongoing civil Road works " },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useCallback ensures stable reference for useEffect
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Autoplay every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]); // ✅ include nextSlide

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
    <div id="gallery" className="px-4 md:px-10 lg:px-20 scroll-mt-[200px]">
      <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary text-left">
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

        <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-[80%] h-[600px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${getSlideStyle(index)}`}
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
