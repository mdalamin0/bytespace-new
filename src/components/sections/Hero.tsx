import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Button from "../ui/Button";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="grid-bg bg-blue relative w-full overflow-hidden pt-24 pb-0">
      <div className="absolute inset-0 pointer-events-none z-0 top-20">
        <Image
          src="/images/ornament.png"
          alt="Background Ornaments"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      <div className="container-app relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.3]">
          Get Access to Hundreds <br className="hidden sm:inline" /> Courses
          Available
        </h1>

        <p className="mt-4 text-xs text-white/80 sm:text-base md:text-lg py-6 md:py-8 max-w-[600px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="relative z-30 mt-4 sm:mt-8 flex w-full max-w-[680px] flex-col gap-3 px-4 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
          <div className="flex flex-1 items-center rounded-full bg-white p-3.5 shadow-md">
            <div className="flex w-full items-center px-2">
              <FiSearch className="flex-shrink-0 text-lg text-gray-400" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent pl-3 text-sm text-gray-800 placeholder-gray-400 outline-none sm:text-base"
              />
            </div>
          </div>

          <Button variant="primary" className="w-full sm:w-auto">
            Search
          </Button>
        </div>

        <div className="relative mt-8 sm:mt-12 w-full max-w-[340px] sm:max-w-[620px] aspect-[4/3] flex justify-center items-end mb-0">
      
          <div className="absolute bottom-0 w-[600px] sm:w-[1150px] aspect-square max-h-[600px] sm:max-h-[1150px] z-0">
            <Image
              src="/images/Ellipse.png"
              alt="Yellow Shape"
              fill
              className="object-contain object-bottom"
            />
          </div>

    
          <div className="relative w-[290px] h-[270px] sm:w-[578px] sm:h-[541px] sm:left-5 z-10 left-5">
            <Image
              src="/images/hero-person.png"
              alt="Student learning"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          <div className="absolute top-[35%] left-[-4%] z-20 hidden rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur-sm sm:flex items-center gap-3 border border-white/20 text-left">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <div>
              <p className="font-semibold text-[#171717]">UI/UX Design</p>
              <p className="text-[10px] text-gray-500 font-medium">
                200 Courses • 1000+ Students
              </p>
            </div>
          </div>

          <div className="absolute top-[38%] right-[-4%] z-20 hidden rounded-2xl bg-white p-4.5 shadow-xl sm:block text-left w-[232px]">
            <p className="font-semibold uppercase tracking-wider text-[10px] text-gray-400">
              Learning Progress
            </p>
            <p className="text-2xl font-black text-[#171717] mt-0.5">55%</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[55%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div className="absolute bottom-[12%] left-[-8%] z-20 hidden rounded-2xl bg-white p-3.5 shadow-xl sm:block text-left">
            <p className="font-semibold text-[#171717]">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-black">4.5</span>
              <span className="text-[10px] text-gray-400">(240)</span>
              <span className="text-primary">
                <FaStar className="w-4 h-4" />
              </span>
            </div>
            <div className="flex items-center -space-x-1.5 mt-2">
              <div className="h-6 w-6 rounded-full bg-gray-300 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-400 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="h-6 w-6 rounded-full bg-gray-500 border border-white"></div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary border border-white text-[8px] font-bold text-black">
                2k+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
