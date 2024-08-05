import React from "react";
import Image from "next/image";
function Main() {
  return (
    <>
      <div className="text-gray-500 flex gap">
        <div className="w-1/2 ">
          <h2 className="ml-8 w-1/2 mt-8 mb-8 text-3xl py-14">
            Discover your perfect care, Health is Wealth
          </h2>
          <h1 className="text-8xl ml-8 text-green-900 font-bold">
            Get the nearest Medical Care Providers, Save Time!
          </h1>

          <div className="py-1">
            <p className="ml-8  mt-8 mb-8 text-3xl">
              Top-notch, First class medical services. Get fully integrative
              care from well trained doctors and medical personels with
              affordable subscription fee.
            </p>
          </div>

          <div className="py-14">
            <button className=" ml-8 border-green border-2 bg-green-900 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
              Find Your Hospital
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/Images/homealt.jpg"
            alt="known"
            width={900}
            height={300}
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Main;
