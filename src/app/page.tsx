'use client'
import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useRouter } from "next/navigation";
import Main from "@/components/main";
import Meetdocs from "@/components/meetdocs";
import Nav from "@/components/navbar";
import Services from "@/components/services";
import Users from "@/components/users";
import Link from "next/link";
import SearchHospital from "@/components/hospitalsearch";


export default function Home() {
const [user] = useAuthState(auth);
const router = useRouter()
// const userSession = sessionStorage.getItem('user');
const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null
  

console.log({user})

if (!user && !userSession) {
  router.push('/sign_up')
}


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
      <Services />
    </>
  );
}
