import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function CreatorCTA() {
  return (
    <section
      className="grid-bg bg-blue relative w-full overflow-hidden px-4 py-20 text-center sm:px-12 sm:py-24 md:py-28"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "82px 82px, 82px 82px",
        backgroundPosition: "center, center",
        backgroundRepeat: "repeat, repeat",
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/shapes/Mask Group.png"
          alt=""
          width={385}
          height={385}
          className=""
          priority
        />
      </div>

      <div className="absolute -left-6.5 top-[55%] pointer-events-none z-10 hidden lg:block w-47 h-47">
        <Image
          src="/images/shapes/Cone.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute left-[18%] top-[5%] pointer-events-none z-10 hidden lg:block w-44 h-44">
        <Image
          src="/images/shapes/Mask Group 1.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute left-[5%] bottom-[-80px] pointer-events-none z-10 hidden lg:block w-85.5 h-85.5">
        <Image
          src="/images/shapes/Mask Group 4.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[12%] top-[5%] pointer-events-none z-10 hidden lg:block w-[188px] h-[188px]">
        <Image
          src="/images/shapes/Mask Group 2.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[-80px] top-[8%] pointer-events-none z-10 hidden lg:block w-[370px] h-[370px]">
        <Image
          src="/images/shapes/Mask Group 3.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-0 bottom-[-70px] pointer-events-none z-10 hidden lg:block w-[330px] h-[330px]">
        <Image
          src="/images/shapes/Mask Group 5.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 mx-auto flex max-w-[840px] flex-col items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.2]">
          Unlock Your Potential as a <br className="hidden sm:inline" /> Creator
          with ByteSpace
        </h2>

        <p className="mt-6 max-w-[760px] text-xs leading-[1.8] text-white/80 sm:text-sm px-4">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-10">
          <Button variant="primary">Join as Creator</Button>
        </div>
      </div>
    </section>
  );
}
