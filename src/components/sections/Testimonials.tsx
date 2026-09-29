import React from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/images/profiles/profile 1.png",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/images/profiles/profile 2.png",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: 3,
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/images/profiles/profile 3.png",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFAFA] py-20 px-4 sm:px-6">
      <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[600px] w-[600px]">
        <Image
          src="/images/colors/Ellipse 8.png"
          alt=""
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="pointer-events-none absolute right-[20%] top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2">
        <Image
          src="/images/colors/Ellipse 12.png"
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="pointer-events-none absolute right-0 -top-10 -z-10 h-[700px] w-[700px]">
        <Image
          src="/images/colors/Ellipse 11.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="container-app mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 mb-16">
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl md:text-[44px] leading-[1.15]">
              Discover What Our <br /> Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6 text-left lg:pt-2">
            <p className="text-sm leading-[1.75] text-[#666666] sm:text-[15px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-[32px] bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100/50"
            >
              <div className="text-left">
                <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#171717]">
                  {item.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-blue">
                  {item.role}
                </p>

                <p className="mt-6 text-[14px] leading-[1.7] text-[#666666]">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
