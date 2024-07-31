import React from "react";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <div className="w-1/2 mx-auto px-8">
        <div className="text-center mx-9 my-10">
          <h1 className="text-5xl">Welcome Back!</h1>
          <h2 className="text-2xl pt-5">Login to your account</h2>
        </div>
        <div className="mx-9">
          <form>
            <label htmlFor="Umail" className="text-2xl">
              Your Email
            </label>
            <br />
            <input
              type="email"
              id="Umail"
              placeholder="example@gmail.com"
              className="my-5 w-80 py-6 px-5 border-green border-2"
            />
            <br />
            <label htmlFor="Upassword" className="text-2xl">
              Your Password
            </label>
            <br />
            <input
              type="password"
              id="Upassword"
              placeholder="Enter your password"
              className="my-5 w-80 py-6 px-5 border-green border-2"
            />
          </form>
        </div>
        <div className="mt-5 text-center">
          <button className="border-green border-2 bg-green-500 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Log in
          </button><br />
          < button className="border-2 border-black my-5 w-80 px-5 py-6 text-xl">
            Sign in with Google
          </button>
        </div>
        <div className="text-center">
          <p>Don't have an account? <Link href="/sign_up">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
