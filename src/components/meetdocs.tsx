import React from "react";
import Image from "next/image";

function Meetdocs() {
  return (
    <>
      <div className="pb-14">
        <div className="py-14 text-center text-5xl font-bold text-green-900">
          <h1>Meet Our Doctors</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/Images/docgroup.jpg"
              alt="img"
              width={800}
              height={200}
              className="w-full pl-6"
            ></Image>
          </div>
          <div className="bg-green-900">
            <h2 className="ml-8 text-white px-6 mt-8 mb-8 text-3xl">
              Our team of doctors are more than just a group of professionals,
              they are the heart and soul of our commitment to providing
              exceptional healthcare. Each member brings a unique blend of
              expertise, compassion, and dedication to our patients. Together,
              they form a powerhouse of knowledge and experience, ensuring that
              you receive the best care possible.
            </h2>
            <h2 className="ml-8 text-white px-6 mt-8 mb-8 text-3xl">
              We are a small team of highly dedicated and ambitious people. We
              are curious, funny radically honest yet kind, and we thrive on
              collaboration and transparency.
            </h2>
            <div className="text-center">
              <button className=" ml-8 border-green border-2 bg-white rounded w-80 mx-auto py-5 text-center text-black text-2xl hover:bg-green-500 hover:text-black ">
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
