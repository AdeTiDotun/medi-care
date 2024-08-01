import Main from "@/components/main";
import Nav from "@/components/navbar";
import Users from "@/components/users";

import Link from "next/link";


export default function Home() {
  return (
    <>
      <Nav />
      <Main />

      {/* How it works' session */}
      <div>
        <div>
          <h2>How it works</h2>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* What our users say */}
      <Users />
    </>
  );
}
