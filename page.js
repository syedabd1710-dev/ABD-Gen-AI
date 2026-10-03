import Nav from "@/component/Nav";
import Hero from "@/component/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]  bg-[radial-gradient(ellipse_1000px_450px_at_50%_100px,rgba(59,130,246,0.7),transparent_70%),radial-gradient(ellipse_700px_450px_at_0%_100%,rgba(236,72,153,0.7),transparent_70%),radial-gradient(ellipse_700px_450px_at_100%_100%,rgba(236,72,153,0.7),transparent_70%),radial-gradient(ellipse_700px_400px_at_50%_100px,rgba(255,255,255,0.8),transparent_70%)]">

      <Nav />
      {/* import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full h-[70px]  flex items-center justify-center bg-transparent
    ">
      <div className="w-full max-w-[1150px] px-6 flex items-center justify-between">

       
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.083 0c83.413 0 151.061 67.819 151.061 151.467v57.6h50.283c83.413 0 151.082 67.797 151.082 151.466 0 83.691-67.626 151.467-151.082 151.467H0V151.467C0 67.84 67.627 0 151.083 0z"
              fill="url(#paint0_radial)"
            />

            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(92.545 118.724 174.844) scale(480.474 650.325)"
              >
                <stop offset=".25" stopColor="#FE7B02" />
                <stop offset=".433" stopColor="#FE4230" />
                <stop offset=".548" stopColor="#FE529A" />
                <stop offset=".654" stopColor="#DD67EE" />
                <stop offset=".95" stopColor="#4B73FF" />
              </radialGradient>
            </defs>
          </svg>

          <span className="text-[22px] font-bold tracking-tight">
            Lovable
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[14px] text-gray-900">

          <Link
            href="/solutions"
            className="hover:text-gray-500 transition flex items-center font-bold gap-1"
          >
            Solutions
      
          </Link>

          <Link
            href="/resources"
            className="hover:text-gray-500 transition flex items-center font-bold gap-1"
          >
            Resources
         
          </Link>

          <Link
            href="/community"
            className="hover:text-gray-500 transition font-bold"
          >
            Community
          </Link>

          <Link
            href="/enterprise"
            className="hover:text-gray-500 transition font-bold"
          >
            Enterprise
          </Link>

          <Link
            href="/pricing"
            className="hover:text-gray-500 transition font-bold"
          >
            Pricing
          </Link>

          <Link
            href="/security"
            className="hover:text-gray-500 transition font-bold"
          >
            Security
          </Link>

        </div>

     
        <div className="flex items-center gap-2">

          <Link
            href="/login"
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            Log in
          </Link>

          <Link
            href="/get-started"
            className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition shadow-sm"
          >
            Get started
          </Link>

        </div>

      </div>
    </nav>
  );
}

  */}
 

      <Hero />
{/* 
      "use client"
import { useState } from "react";

export default function Hero() {

  const [massage ,setMassage] = useState("")

  const  HandleMassage = (e)=>{

    if (massage.trim() === "") {
      console.log("Enter massage ");
    }else{
      console.log(massage);
    }
    




  }
    return (

      <section className="relative min-h-[calc(100vh-70px)] overflow-hidden">
  
    
        <div className="absolute inset-0 overflow-hidden">
  
  
        </div>
  
      
        <div className="relative z-10 flex flex-col items-center pt-[140px] px-5">
  
          <h1
            className="
              text-center
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-[-2.5px]
              text-[#202020]
            "
          >
            Build something Lovable
          </h1>
  
          <p className="mt-3 text-center text-base md:text-lg text-gray-600">
            Bring a new product, internal tool, or entire company to life.
          </p>
  
        
          <div
            className="
              relative
              mt-9
              w-full
              max-w-[610px]
              h-[150px]
              bg-white
              rounded-[26px]
              border
              border-gray-200
              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              p-5
            "
          >
  
            <textarea
              placeholder="Ask Lovable to create a prototype..."
              value={massage}
              onChange={(e) => setMassage(e.target.value)}

              className="
                w-full
                h-[65px]
                resize-none
                overflow-y-auto
                text-[15px]
                mb-8
                pb-3
                text-gray-700
                placeholder:text-gray-500
                outline-none
                bg-transparent
              "
            />
  
           
            <div
              className="
                absolute
                bottom-4
                left-5
                right-5
                flex
                items-center
                justify-between
              "
            >
  
              <button
                className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-gray-100
                  hover:text-black
                  transition
                  text-xl
                "
              >
                +
              </button>
  
              
              <div className="flex items-center gap-4">
  
                <button
                  className="
                    text-sm
                    text-gray-500
                    hover:text-black
                    transition
                    border
                    border-black
                    px-3.5
                    py-1.5
                    rounded-full
                  "
                >
                  Build
                </button>
  
                <button
                 onClick={(e)=>{HandleMassage(e)}}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-black
                    text-white
                    text-sm
                    hover:bg-gray-800
                    transition
                  "
                >
                  Send
                </button>
  
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }
   */}


    </main>
  );
}
