"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Hello, I'm{" "} </span>
             <br></br>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mehak',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Programmer',
        1000,
        'Tech Innovator',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Web developer in progress with a strong foundation in HTML, CSS,
            JavaScript, and Next.js, eager to take on new challenges.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  text-white mt-3">
             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV </span>
              </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center">
          <Image
            src="/images/profile.png"
            alt="profile image"
            //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-full object-cover"
             width={300}
             height={300}
             className="object-cover rounded-full"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
