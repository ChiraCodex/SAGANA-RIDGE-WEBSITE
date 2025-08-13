"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Mail } from "lucide-react";
import logo from "../../../public/images/SaganaRidge-logo.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: close menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 uppercase">
        {/* Top info bar */}
        <div className="bg-accent-green p-2 lowercase flex justify-between items-center text-sm">
          <div className="text-left">
            <span className="uppercase font-bold">For Inquiries:</span>
            <div className="flex justify-end items-center gap-1">
              <Mail className="w-4 h-4" />
              <a
                className="text-black underline-none"
                href="mailto:saganaridgelimited@gmail.com"
              >
                saganaridgelimited@gmail.com
              </a>
            </div>
          </div>
          <div className="font-bold flex justify-end items-center gap-1">
            <Phone className="w-4 h-4" />
            <p>+254 706 380 244</p>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div>
            <a href="#home">
              <Image
                src={logo}
                alt="Sagana Ridge Logo"
                width={200}
                height={100}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-wrap justify-between gap-6 font-bold">
            <a className="text-black hover:text-brand-secondary" href="#about">
              About
            </a>
            <a
              className="text-black hover:text-brand-secondary"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-black hover:text-brand-secondary"
              href="#gallery"
            >
              Gallery
            </a>
            <a className="text-black hover:text-brand-secondary" href="#news">
              Blog
            </a>
            <a
              className="text-black hover:text-brand-secondary"
              href="#contacts"
            >
              Contacts
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="uppercase bg-accent-orange hover:bg-brand-primary border-2 rounded-xl p-2 font-semibold border-brand-primary text-white">
             <a href="#plots">Now Selling</a>
            </button>
          </div>

          {/* Hamburger - mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu below header */}
      <div
        className={`md:hidden fixed top-[180px] left-0 w-full bg-white/60 backdrop-blur-md z-40 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col justify-center items-center gap-4 font-bold py-4">
          <a
            className="text-black hover:text-brand-secondary"
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            className="text-black hover:text-brand-secondary"
            href="#features"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            className="text-black hover:text-brand-secondary"
            href="#gallery"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            className="text-black hover:text-brand-secondary"
            href="#news"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a
            className="text-black hover:text-brand-secondary"
            href="#contacts"
            onClick={() => setIsOpen(false)}
          >
            Contacts
          </a>
          <button className="uppercase bg-accent-orange hover:bg-brand-primary border-2 rounded-xl p-2 font-semibold border-brand-primary text-white mt-2">
            <a href="#plots">Now Selling</a>
          </button>
        </nav>
      </div>
    </>
  );
}
