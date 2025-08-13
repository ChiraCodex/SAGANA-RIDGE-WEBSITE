"use client";
import { useState } from "react";
import Image from "next/image";
import gatehouse from '../../../public/images/3.jpg';
import fence from '../../../public/images/8.jpg';
import gate from '../../../public/images/2.jpg';
import beacon from '../../../public/images/6.jpg';

export default function News() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const newsItems = [
    {
      img: gatehouse,
      title: "Ongoing Construction of GateHouse",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio soluta rem nesciunt aliquid ex temporibus asperiores suscipit iusto, distinctio enim deserunt perspiciatis eius fugiat sapiente quibusdam sed quo iste!",
    },
    {
      img: fence,
      title: "Secure Chainlink fencing around the Project",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio soluta rem nesciunt aliquid ex temporibus asperiores suscipit iusto, distinctio enim deserunt perspiciatis eius fugiat sapiente quibusdam sed quo iste!",
    },
    {
      img: gate,
      title: "Construction of Sagana Ridge Gate",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio soluta rem nesciunt aliquid ex temporibus asperiores suscipit iusto, distinctio enim deserunt perspiciatis eius fugiat sapiente quibusdam sed quo iste!",
    },
    {
      img: beacon,
      title: "Plot beacons already mounted",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio soluta rem nesciunt aliquid ex temporibus asperiores suscipit iusto, distinctio enim deserunt perspiciatis eius fugiat sapiente quibusdam sed quo iste!",
    },
  ];

  return (
    <main id="news" className="min-h-[100vh] pt-40 px-4 md:px-10 lg:px-20">
      <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary text-center">
        Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-accent-gray rounded-xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelectedImage(item.img.src)}>
            <div className="w-full h-64 md:h-48 lg:h-64 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <p className="font-bold text-lg mb-2">{item.title}</p>
              <p className="text-sm md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="News Image"
              width={1200}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
