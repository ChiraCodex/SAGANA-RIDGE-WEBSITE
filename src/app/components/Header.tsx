"use client"
import { useState } from "react";
import { Phone, Menu, X, Mail } from "lucide-react";
import logo from "../../../public/images/SaganaRidge-logo.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed flex flex-col-reverse gap-4 w-full bg-white uppercase py-4 shadow-sm z-50 px-6">
        {/* Top info bar */}
        <div className="bg-accent-green p-2 lowercase flex justify-between items-center mb-2 text-sm">
          <div className="text-left">
            <span className="uppercase font-bold">For Inquiries:</span>
            <div className="flex justify-end items-center gap-1">
              <Mail className="w-4 h-4"/>
            <a className="text-black underline-none" href="mailto:saganaridgelimited@gmail.com">saganaridgelimited@gmail.com</a>
            </div>
          </div>
          <div className="font-bold flex justify-end items-center gap-1 mt-4">
            <Phone className="w-4 h-4"/>
            <p>+254 706 380 244</p>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#home">
              <Image src={logo} alt="Sagana Ridge Logo" width={200} height={100} />
            </a>
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
