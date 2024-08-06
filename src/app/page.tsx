import Main from "@/components/main";
import Meetdocs from "@/components/meetdocs";
import Nav from "@/components/navbar";
import Users from "@/components/users";

import Link from "next/link";


export default function Home() {
  return (
    <>
    {/* Navigation session */}
      <Nav />
      <hr className="h-px my-4 mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      {/* Main session */}
      <Main />
      <hr className="h-px my-4 mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      {/* Meet our doctors */}
      <Meetdocs />
      
      {/* What our users say */}
      <Users />
      <hr className="h-px my-4 mx-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </>
  );
}
