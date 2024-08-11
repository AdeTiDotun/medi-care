import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 bg-green-900 text-white px-20 py-20 gap-20">
        <div>
          <h1 className="font-bold text-5xl font-bold italic">MediCare</h1>
        </div>
        
          <div className="text-left text-2xl">
            <h3 className="my-4">Home</h3>
            <h3 className="my-4">About Us</h3>
            <h3 className="my-4">Services</h3>
            <h3 className="my-4">Pricing</h3>
          </div>

          <div className="text-left text-2xl">
            <h2 className="my-4">Contact Us</h2>
            <h2 className="my-4">Twitter</h2>
            <h3 className="my-4">LinkedIn</h3>
            <h3 className="my-4">Instagram</h3>
            
          </div>
      </div>
    </>
  );
};

export default Footer;
