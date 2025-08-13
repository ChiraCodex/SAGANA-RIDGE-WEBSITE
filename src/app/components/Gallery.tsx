"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
  ];

  return (
    <div id="gallery" className="px-4 md:px-10 lg:px-20 py-20">
      <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary text-center">
        Project Gallery
      </h2>

      {/* Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${index}`}
              width={300}
              height={200}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Popup / Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="Popup"
              width={1200}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
