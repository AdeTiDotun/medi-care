import React from "react";
import Image from "next/image";

function Meetdocs() {
  return (
    <>
      <div className="pb-14 px-4 lg:px-8">
        {/* Title */}
        <div className="py-14 text-center text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
          <h1>Meet Our Doctors</h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Images/docgroup.jpg"
              alt="Doctors group"
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="bg-green-900 p-6 rounded-lg text-white">
            <h2 className="text-xl md:text-2xl mb-4">
              Our team of doctors is more than just a group of professionals; 
              they are the heart and soul of our commitment to providing 
              exceptional healthcare. Each member brings a unique blend of 
              expertise, compassion, and dedication to our patients. Together, 
              they form a powerhouse of knowledge and experience, ensuring that 
              you receive the best care possible.
            </h2>
            <h2 className="text-xl md:text-2xl mb-4">
              We are a small team of highly dedicated and ambitious people. We 
              are curious, funny, radically honest yet kind, and we thrive on 
              collaboration and transparency.
            </h2>
            <div className="text-center mt-6">
              <button className="border-2 border-green-900 bg-white rounded px-8 py-4 text-black text-lg md:text-xl font-bold hover:bg-green-500 hover:text-white transition-colors">
                See All Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meetdocs;
