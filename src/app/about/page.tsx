import Footer from "@/components/footer";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-green-100 p-6 md:p-12 min-h-screen font-sans">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-800">
            About Our Company
          </h2>
          <h3 className="text-base md:text-lg text-gray-700 leading-relaxed">
            CareFinder is a user-friendly web application designed to make
            hospital searches effortless and efficient. With CareFinder, users can
            quickly locate and explore hospitals in their vicinity, ensuring
            convenient access to quality healthcare services. By simply entering
            their location or enabling GPS, users can browse through a
            comprehensive database of hospitals, filtering results based on
            specialties, ratings, and distance. The app provides detailed
            information about each hospital, including address, contact details,
            available services, and patient reviews. Our Vision CareFinder aims to
            empower users with the ability to make informed decisions about their
            healthcare needs, enhancing their overall healthcare experience.
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
