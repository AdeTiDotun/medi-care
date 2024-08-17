import React from "react";
import Link from "next/link";


function Services() {
  return (
    <>
      <div className="pt-18 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-green-900">
          See Our Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-28 text-center">
        {/* Service 1 */}
        <div className="py-6 lg:py-14">
          <button className="border-green border-2 bg-green-900 rounded w-full py-6 text-center text-white text-xl lg:text-2xl hover:bg-white hover:text-black">
            Search Doctors
            <p className="mt-2 text-sm lg:text-lg">Find the Best Doctors near you</p>
          </button>
        </div>

        {/* Service 2 */}
        <div className="py-6 lg:py-14">

          <Link href="/hospital">
          
          <button className="border-green border-2 bg-green-900 rounded w-full py-6 text-center text-white text-xl lg:text-2xl hover:bg-white hover:text-black">
            Search Hospitals
            <p className="mt-2 text-sm lg:text-lg">Find the Best Hospitals near you</p>
          </button>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="py-6 lg:py-14">
          <button className="border-green border-2 bg-green-900 rounded w-full py-6 text-center text-white text-xl lg:text-2xl hover:bg-white hover:text-black">
            Export Hospitals
            <p className="mt-2 text-sm lg:text-lg">Save list of hospitals</p>
          </button>
        </div>

        {/* Service 4 */}
        <div className="py-6 lg:py-14">
          <button className="border-green border-2 bg-green-900 rounded w-full py-6 text-center text-white text-xl lg:text-2xl hover:bg-white hover:text-black">
            Share Hospitals
            <p className="mt-2 text-sm lg:text-lg">Share the list of hospitals with others</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
