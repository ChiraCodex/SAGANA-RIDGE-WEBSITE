"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// House and floor plan images
import typeA from "../../../public/images/3b.jpeg";
import typeB from "../../../public/images/3b.jpeg";
import typeC from "../../../public/images/3b.jpeg";

// Dummy floor plan images
import dummyFloor1 from "../../../public/images/floorplan1.jpg";
import dummyFloor2 from "../../../public/images/floorplan2.jpg";

// Roof images
import roofCountry from "../../../public/images/roof-country.jpg";
import roofFlat from "../../../public/images/roof-flat.jpeg";

interface HouseType {
  name: string;
  img: StaticImageData;
  size: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  description: string;
  carousel: StaticImageData[];
}

export default function HomeTypes() {
  const [selectedHouse, setSelectedHouse] = useState<HouseType | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const houseTypes: HouseType[] = [
    {
      name: "2-br Bungalow",
      img: typeA,
      size: "1,200 sq.ft",
      bedrooms: 2,
      bathrooms: 2,
      price: "KSh 3,500,000",
      description:
        "A cozy 2-bedroom bungalow with open-plan living and a spacious backyard.",
      carousel: [dummyFloor1, dummyFloor2, roofCountry, roofFlat],
    },
    {
      name: "3-br Bungalow",
      img: typeB,
      size: "1,800 sq.ft",
      bedrooms: 3,
      bathrooms: 3,
      price: "KSh 4,800,000",
      description:
        "Perfect for families, featuring a large kitchen and en-suite master bedroom.",
      carousel: [dummyFloor1, dummyFloor2, roofCountry, roofFlat],
    },
    {
      name: "4-br Villa",
      img: typeC,
      size: "2,500 sq.ft",
      bedrooms: 4,
      bathrooms: 4,
      price: "KSh 7,200,000",
      description:
        "A luxurious villa with a private garden and modern finishes throughout.",
      carousel: [dummyFloor1, dummyFloor2, roofCountry, roofFlat],
    },
  ];

  const handleNext = () => {
    if (!selectedHouse) return;
    setCarouselIndex((prev) => (prev + 1) % selectedHouse.carousel.length);
  };

  const handlePrev = () => {
    if (!selectedHouse) return;
    setCarouselIndex(
      (prev) =>
        (prev - 1 + selectedHouse.carousel.length) % selectedHouse.carousel.length
    );
  };

  return (
    <>
      <div className="mt-8 my-16 relative px-4 md:px-[5vw]">
        <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary">
          House Type Designs
        </h2>

        {/* House Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houseTypes.map((house, idx) => (
            <div
              key={idx}
              className="bg-accent-gray p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">
                <Image
                  src={house.img}
                  alt={house.name}
                  width={700}
                  height={700}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold mb-3 text-lg">{house.name}</h3>
              <button
                onClick={() => {
                  setSelectedHouse(house);
                  setCarouselIndex(0);
                }}
                className="flex justify-center bg-brand-primary w-full py-2 rounded-lg hover:bg-brand-secondary transition"
              >
                <p className="font-bold text-white text-center">See Details</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${
          selectedHouse ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSelectedHouse(null)}
      >
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-xl w-full sm:max-w-3xl transform transition-transform duration-300 ${
            selectedHouse ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedHouse(null)}
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg z-10"
          >
            ✕
          </button>

          {selectedHouse && (
            <div className="p-6 overflow-y-auto flex-1 text-center">
              <h3 className="text-2xl font-bold mb-4">{selectedHouse.name}</h3>

              {/* Carousel Image */}
              <Image
                src={selectedHouse.carousel[carouselIndex]}
                alt={`Slide ${carouselIndex + 1}`}
                width={900}
                height={900}
                className="rounded-lg mb-4 object-cover mx-auto"
              />

              {/* Carousel Controls */}
              <div className="flex justify-between items-center max-w-xs mx-auto mb-4">
                <button
                  onClick={handlePrev}
                  className="bg-brand-primary px-3 py-1 rounded-lg text-white hover:bg-brand-secondary transition"
                >
                  Prev
                </button>
                <p className="font-semibold">
                  {carouselIndex + 1} / {selectedHouse.carousel.length}
                </p>
                <button
                  onClick={handleNext}
                  className="bg-brand-primary px-3 py-1 rounded-lg text-white hover:bg-brand-secondary transition"
                >
                  Next
                </button>
              </div>

              {/* Details */}
              <div className="space-y-2 text-left max-w-md mx-auto">
                <p>
                  <strong>Size:</strong> {selectedHouse.size}
                </p>
                <p>
                  <strong>Bedrooms:</strong> {selectedHouse.bedrooms}
                </p>
                <p>
                  <strong>Bathrooms:</strong> {selectedHouse.bathrooms}
                </p>
                <p>
                  <strong>Price:</strong> {selectedHouse.price}
                </p>
                <p className="mt-2">{selectedHouse.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
