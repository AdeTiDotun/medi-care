import React from "react";

function Services() {
  return (
    <>
      <div className="pt-18 pb-12">
        <h1 className="text-5xl font-medium text-center text-green-900">
          See Our Services
        </h1>
      </div>
      <div className="lg:grid grid-cols-4 mx-28 text-center">
        <div className="py-14">
          <button className=" ml-8 border-green border-2 bg-green-900 rounded w-80 mx-auto py-10 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Search Doctors
            <p className="my-1">Find the Best Doctors near you</p>
          </button>
        </div>
        <div className="py-14">
          <button className=" ml-8 border-green border-2 bg-green-900 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Search Hospitals
            <p className="my-5">Find the Best Hospitals near you</p>
          </button>
        </div>
        <div className="py-14">
          <button className=" ml-8 border-green border-2 bg-green-900 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Export Hospitals
            <p className="my-9">Save list of hospitals</p>
          </button>
        </div>
        <div className="py-14">
          <button className=" ml-8 border-green border-2 bg-green-900 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Share Hospitals
            <p className="my-5">Share the list of hospitals with others</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
