import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex gap-60 bg-white text-gray-600 px-20">
        <div>
          <h1>MediCare</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
          <h3>social media logos and connects</h3>
        </div>

        <div>
          <h2>Company</h2>
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Services</h3>
          <h3>Contact Us</h3>
        </div>

        <div>
          <h2>Pages</h2>
          <h3>Our Team</h3>
          <h3>Pricing Plan</h3>
          <h3>404 Page</h3>
        </div>

        <div>
          <h2>Contact Us</h2>
          <h2>Twitter</h2>
          <h3>LinkedIn</h3>
          <h3>Instagram</h3>
          <h3>Facebook</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
