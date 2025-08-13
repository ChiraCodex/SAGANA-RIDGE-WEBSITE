"use client"
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../../../public/images/SaganaRidge-logo.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full bg-white uppercase py-4 shadow-sm z-50 px-6">
        {/* Top info bar */}
        <div className="hidden md:flex justify-between items-center mb-2 text-sm">
          <p>
            Office Location<br />
            Address
          </p>
          <div className="flex items-center gap-4">
            <Phone />
            <p>+254 722 123 456</p>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Sagana Ridge Logo" width={200} height={100} />
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex flex-wrap justify-between gap-6 font-bold">
            <a
              className="text-black hover:text-brand-secondary"
              href="#about"
            >
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
            <a
              className="text-black hover:text-brand-secondary"
              href="#news"
            >
              Blog
            </a>
            <a
              className="text-black hover:text-brand-secondary"
              href="#contacts"
            >
              Contacts
            </a>
          </nav>

          {/* CTA button - hidden on mobile */}
          <div className="hidden md:block">
            <button className="uppercase bg-accent-orange hover:bg-brand-primary border-2 rounded-xl p-2 font-semibold border-brand-primary text-white">
              Now Selling
            </button>
          </div>

          {/* Hamburger button - shown on mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 font-bold bg-white p-4 rounded-lg shadow-lg">
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
              Now Selling
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
