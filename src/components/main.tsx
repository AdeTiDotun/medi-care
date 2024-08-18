import React from "react";
import Image from "next/image";
import Link from "next/link";

function Main() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center text-gray-500 lg:gap-8 p-4 lg:p-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-8 text-center lg:text-left">
            Discover your perfect care, Health is Wealth
          </h2>
          <h1 className="text-4xl lg:text-6xl font-fancy font-bold text-green-900 mb-6 lg:mb-8 text-center lg:text-left">
            Get the nearest Medical Care Providers, Save Time!
          </h1>

          <div className="py-4">
            <p className="text-lg lg:text-2xl mb-6 lg:mb-8 text-center lg:text-left">
              Top-notch, first-class medical services. Get fully integrative
              care from well-trained doctors and medical personnel with
              affordable subscription fees.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <Link href="/hospital">
              <button className="border-green-900 border-2 bg-green-900 rounded px-8 py-4 text-white text-lg lg:text-xl font-bold hover:bg-white hover:text-green-900 transition-colors">
                Find Your Hospital
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="/Images/homealt.jpg"
            alt="Medical care"
            width={900}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
