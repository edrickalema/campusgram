/* eslint-disable @next/next/no-img-element */
import { PiStudentBold } from "react-icons/pi";
import PostCard from "./components/PostCard";
export default function Home() {
  return (
    <main className="bg-white">
      <section className="max-w-[1200px] m-auto pt-8 px-5">
        <div className="grid grid-cols-[700px_1fr] gap-5 w-full">
          {/* Div for posts */}
          <div className="container">
            {/* post components */}

            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          {/* Div for profile and accounts */}
          <div className="mt-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <PiStudentBold className="text-[4em] text-green-600" />
                <p className="font-semibold text-lg ml-2">
                  Welcome to CAMPUSGRAM
                </p>
              </div>
              <p className="text-blue-500 underline-none font-semibold cursor-pointer">
                Sign up
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
