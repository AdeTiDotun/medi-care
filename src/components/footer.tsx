import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-green-900 text-white px-10 py-14 lg:px-20 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-20">
          {/* Logo Section */}
          <div>
            <h1 className="text-4xl font-bold italic font-serif">MediCare</h1>
          </div>

          {/* Navigation Links */}
          <div className="text-left text-xl">
            <Link href="/">
              <h3 className="my-4 cursor-pointer hover:text-gray-300">Home</h3>
            </Link>
            <Link href="/about">
              <h3 className="my-4 cursor-pointer hover:text-gray-300">About Us</h3>
            </Link>
            <Link href="/services">
              <h3 className="my-4 cursor-pointer hover:text-gray-300">Services</h3>
            </Link>
            <Link href="/pricing">
              <h3 className="my-4 cursor-pointer hover:text-gray-300">Pricing</h3>
            </Link>
          </div>

          {/* Contact and Social Media */}
          <div className="text-left text-xl">
            <h2 className="my-4">Contact Us</h2>
            <div className="flex gap-6 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} className="hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="hover:text-gray-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="mt-10 border-gray-400" />

        {/* Footer Bottom */}
        <div className="text-center text-lg mt-6">
          <p>&copy; {new Date().getFullYear()} MediCare. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
