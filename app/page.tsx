"use client";
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";

export default function Home() {
  const user = useAuthContext();
  console.log(user?.user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-700 text-sm py-3 sm:py-0">
        <nav
          className="relative p-5 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo.svg"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-[40px] h-[40px]"
                />
                <h2 className="font-bold text-white text-lg tracking-wide">
                  FrameCoder
                </h2>
              </div>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              {!user?.user?.email ? (
                <Authentication>
                  <div className="flex items-center gap-x-2 font-medium text-gray-400 hover:text-blue-500 sm:border-s sm:border-gray-700 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Get Started
                  </div>
                </Authentication>
              ) : (
                <ProfileAvatar />
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-100 text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Convert Wireframe To
              <span className="bg-clip-text bg-gradient-to-tl from-violet-500 to-blue-500 text-transparent">
                {" "}
                Code In Seconds
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-300">
              An intelligent conversion tool that lets you produce high-quality codes using advanced AI models.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            {user?.user?.email ? (
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6"
                href="/dashboard"
              >
                Get Started
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ) : (
              <Authentication>
                <Button className="bg-gradient-to-tr from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white">
                  Get Started
                </Button>
              </Authentication>
            )}
          </div>
        </div>
      </main>
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center gap-8 relative max-w-5xl mx-auto">
          {/* Left Image with label */}
          <div className="relative w-1/2 group">
            <span className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2 text-white font-medium text-lg z-10">
              Wireframe
            </span>
            <div
              className="mt-4 rounded-lg overflow-hidden
                      border-2 border-transparent 
                      bg-gradient-to-tr from-blue-500 to-violet-500
                      p-[3px]"
            >
              <div className="bg-white rounded-md shadow-lg shadow-blue-500/30">
                <Image
                  src="/wireframe-left.png" // replace with your left image path
                  alt="Wireframe"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain rounded-md"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-500 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Right Image with label */}
          <div className="relative w-1/2 group">
            <span className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2 text-white font-medium text-lg z-10">
              Code
            </span>
            <div
              className="mt-4 rounded-lg overflow-hidden
                      border-2 border-transparent 
                      bg-gradient-to-tr from-blue-500 to-violet-500
                      p-[3px]"
            >
              <div className="bg-white rounded-md shadow-lg shadow-violet-500/30">
                <Image
                  src="/wireframe-right.jpg" // replace with your right image path
                  alt="Code"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain rounded-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto text-white">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
      How It Works
    </h2>
    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
      Turn your wireframes into clean, production-ready code with just a few clicks using Artificial Intelligence.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
    {/* Card 1 */}
    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500 transition duration-300 shadow-xl hover:shadow-violet-500/30 group">
      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-4 group-hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
        Upload Wireframe
      </h3>
      <p className="text-gray-300">
        Start by uploading your wireframe image. Our AI instantly detects UI elements and structure.
      </p>
    </div>

    {/* Card 2 */}
    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500 transition duration-300 shadow-xl hover:shadow-violet-500/30 group">
      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-4 group-hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4 4m4-4l-4-4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
        AI Generates Code
      </h3>
      <p className="text-gray-300">
        The AI generates optimized, clean HTML/CSS/React code from your design structure in seconds.
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500 transition duration-300 shadow-xl hover:shadow-violet-500/30 group">
      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-4 group-hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16h16M4 8h16" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
        Export or Deploy
      </h3>
      <p className="text-gray-300">
        Easily download or copy the code. Bring your UI ideas to production in minutes.
      </p>
    </div>
  </div>
</section>


      <footer className="bg-gradient-to-r from-black via-gray-900 to-black border-t border-gray-700">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-400 text-sm text-center md:text-left">
        © {new Date().getFullYear()} FrameCoder. All rights reserved.
      </div>
      <div className="flex gap-6 text-gray-400">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
      </div>
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20c7.55 0 11.675-6.26 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.153 4.57a4.106 4.106 0 0 0 1.27 5.482 4.073 4.073 0 0 1-1.86-.514v.05a4.105 4.105 0 0 0 3.292 4.02 4.095 4.095 0 0 1-1.853.07 4.107 4.107 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407 11.616 11.616 0 0 0 8.29 20" />
        </svg>
      </a>
      <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.75c-1.09-.74.08-.72.08-.72a2.52 2.52 0 0 1 1.84 1.23 2.55 2.55 0 0 0 3.5 1 2.57 2.57 0 0 1 .76-1.6c-2.67-.3-5.47-1.34-5.47-5.97a4.66 4.66 0 0 1 1.24-3.23 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.66 4.66 0 0 1 1.24 3.23c0 4.64-2.8 5.66-5.48 5.96a2.88 2.88 0 0 1 .82 2.24v3.33c0 .32.22.7.83.58A12 12 0 0 0 12 .297z" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
