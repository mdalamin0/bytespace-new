import React from "react";
import Image from "next/image";

export default function TrustedCompanies() {
  const companies = [
    { id: 1, name: "Logoipsum", icon: "/images/Icons/Vector1.png" },
    { id: 2, name: "Logoipsum", icon: "/images/Icons/Vector.png" },
    { id: 3, name: "Logoipsum", icon: "/images/Icons/Vector.png" },
    { id: 4, name: "Logoipsum", icon: "/images/Icons/Vector2.png" },
    { id: 5, name: "Logoipsum", icon: "/images/Icons/Vector3.png" },
  ];

  return (
    <section className="w-full bg-[#F5F5F6] py-12 border-b border-gray-100 shadow-sm">
      <div className="container-app flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
        {companies.map((company) => {
          return (
            <div
              key={company.id}
              className="flex items-center gap-2 text-[#82868E] hover:text-gray-900 transition-colors duration-200"
            >
              <div className="relative w-6 h-6 md:w-7 md:h-7">
                <Image
                  src={company.icon}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-base md:text-lg font-bold tracking-tight text-[#737373]">
                {company.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
