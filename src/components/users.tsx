import React from "react";

const Users = () => {
  return (
    <>
      <div>
        <div className="pt-18 pb-12">
          <h1 className="text-5xl font-medium text-center text-green-900">
            What our users say
          </h1>
        </div>
        {/* User's Testimony */}
        <div className="lg:flex px-10 gap-11 text-gray-600">
          <div className="border-solid border-2 border-green-900 rounded-xl my-10">
            <p className="text-5xl px-10 pt-10">&apos;</p>
            <p className="text-2xl px-10">
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. Highly recommended
            </p>
            <h2 className="px-10 py-10">Name</h2>
          </div>
          <div className="border-solid border-2 border-green-900 rounded-xl my-10">
            <p className="text-5xl px-10 pt-10">&apos;</p>
            <p className="text-2xl px-10">
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. Highly recommended
            </p>
            <h2 className="px-10 py-10 py-10">Name</h2>
          </div>
          <div className="border-solid border-2 border-green-900 rounded-xl my-10">
            <p className="text-5xl px-10 pt-10">&apos;</p>
            <p className="text-2xl px-10 py-10">
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. Highly recommended
            </p>
            <h2 className="px-10 py-10">Name</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
