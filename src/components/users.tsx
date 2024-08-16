import React from "react";

const Users = () => {
  return (
    <>
      <div className="py-18">
        <div className="pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-green-900">
            What our users say
          </h1>
        </div>

        {/* User's Testimony */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-10 text-gray-600">
          {/* Testimony 1 */}
          <div className="border-solid border-2 border-green-900 rounded-xl p-8 bg-white shadow-md">
            <p className="text-5xl mb-4">&apos;</p>
            <p className="text-lg lg:text-2xl mb-6">
              Using this platform has been a game-changer for me. I was able to find a specialist close to my home in just minutes. The reviews helped me make an informed decision, and the experience was seamless.
            </p>
            <h2 className="text-xl font-semibold text-green-900">Chinelo Obinna</h2>
          </div>

          {/* Testimony 2 */}
          <div className="border-solid border-2 border-green-900 rounded-xl p-8 bg-white shadow-md">
            <p className="text-5xl mb-4">&apos;</p>
            <p className="text-lg lg:text-2xl mb-6">
              I never knew finding a healthcare provider could be so straightforward. This site took all the stress away from searching for the right hospital. It’s fast, easy to use, and reliable. I’m truly impressed.
            </p>
            <h2 className="text-xl font-semibold text-green-900">Adeola Adebayo</h2>
          </div>

          {/* Testimony 3 */}
          <div className="border-solid border-2 border-green-900 rounded-xl p-8 bg-white shadow-md">
            <p className="text-5xl mb-4">&apos;</p>
            <p className="text-lg lg:text-2xl mb-6">
              This service has saved me a lot of time and hassle. I was able to compare hospitals and make an informed choice with just a few clicks. The detailed information provided made all the difference.
            </p>
            <h2 className="text-xl font-semibold text-green-900">Bola Okonkwo</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
