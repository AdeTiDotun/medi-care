import Users from "@/components/users";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="bg-white text-gray-500">
        <div>
          <h2 className="mt-8 mb-8">
            Discover your perfect care, Health is Wealth
          </h2>
          <h1>Get the nearest Medical Care Providers, Save Time!</h1>
          <button className="bg-green-500 rounded px-2 py-4">
            Get started
          </button>
        </div>

        <div></div>
      </div>

      {/* How it works' session */}
      <div>
        <div>
          <h2>How it works</h2>
        </div>
        <div>
          <div>

          </div>
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
