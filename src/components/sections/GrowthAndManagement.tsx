import React from "react";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";

const stats = [
  {
    value: "12K",
    label: "Students",
  },
  {
    value: "70+",
    label: "Courses",
  },
  {
    value: "16",
    label: "Creators",
  },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthAndManagement() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFAFA]">
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[-80px]
          -z-10
          h-[620px]
          w-[720px]
          sm:left-[-100px]
          sm:top-[-70px]
          sm:h-[700px]
          sm:w-[800px]
          lg:left-[-100px]
          lg:top-[-80px]
          lg:h-[760px]
          lg:w-[860px]
        "
      >
        <Image
          src="/images/colors/yellow-top-gradient.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>
      <div
        className="
        hidden md:block
          pointer-events-none
          absolute
          left-0
          top-[100px]
          -z-10
          h-[620px]
          w-[720px]
          sm:left-0
          sm:top-[-70px]
          sm:h-[700px]
          sm:w-[800px]
          lg:left-[-220px]
          lg:top-[200px]
          lg:h-[760px]
          lg:w-[860px]
        "
      >
        <Image
          src="/images/colors/middle-left-blue.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[-80px]
          -z-10
          h-[600px]
          w-[650px]
          sm:top-[-70px]
          sm:h-[700px]
          sm:w-[750px]
          lg:top-[-80px]
          lg:h-[760px]
          lg:w-[820px]
        "
      >
        <Image
          src="/images/colors/right-top-blue.png"
          alt=""
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-160px]
          -z-10
          h-[620px]
          w-[680px]
          sm:left-[-140px]
          sm:h-[700px]
          sm:w-[760px]
          lg:left-[-120px]
          lg:h-[760px]
          lg:w-[820px]
        "
      >
        <Image
          src="/images/colors/left-yellow.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-160px]
          -z-10
          h-[650px]
          w-[720px]
          sm:right-[-140px]
          sm:h-[720px]
          sm:w-[800px]
          lg:right-[-120px]
          lg:h-[780px]
          lg:w-[860px]
        "
      >
        <Image
          src="/images/colors/blue gradient.png"
          alt=""
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="container-app relative z-10 mx-auto px-4 pt-16 sm:px-6 md:pt-24 lg:pt-30">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-5">
            <h2
              className="
                max-w-[520px]
                text-3xl
                font-extrabold
                leading-[1.12]
                tracking-tight
                text-[#171717]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Your Path to Professional Growth Starts Here!
            </h2>

            <p
              className="
                mt-6
                max-w-[500px]
                text-sm
                leading-[1.75]
                text-[#666666]
                sm:text-[15px]
              "
            >
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-10 flex items-start gap-8 sm:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-[#003BE2] sm:text-[30px]">
                    {stat.value}
                  </span>

                  <span className="mt-1 text-xs font-medium text-[#666666] sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-7 lg:justify-end">
            <div
              className="
                relative
                aspect-square
                w-full
                max-w-[600px]
              "
            >
              <Image
                src="/images/features/growth-composite.png"
                alt="Professional Growth"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-app relative z-10 mx-auto pt-16 pb-16  md:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">
          <div className="order-2 flex w-full justify-center lg:order-1 lg:col-span-7 lg:justify-start">
            <div
              className="
                relative
                aspect-square
                w-full
                max-w-[600px]
              "
            >
              <Image
                src="/images/features/management-composite.png"
                alt="Course Management"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 lg:pl-8">
            <h2
              className="
                max-w-[520px]
                text-3xl
                font-extrabold
                leading-[1.12]
                tracking-tight
                text-[#171717]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Create &amp; Manage Courses Easily.
            </h2>

            <p
              className="
                mt-6
                max-w-[500px]
                text-sm
                leading-[1.75]
                text-[#666666]
                sm:text-[15px]
              "
            >
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <div className="mt-8 flex flex-col gap-3.5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <HiCheckCircle className="size-5 shrink-0 text-[#003BE2]" />

                  <span className="text-sm font-semibold text-[#171717]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
