import React from "react";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import LoginForm from "@/components/form/LoginForm";

export default function LoginPage() {
  return (
    <main
      className="grid-bg bg-blue relative min-h-screen w-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16"
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
      <div className="w-full flex justify-start relative z-20">
        <Logo variant="light" />
      </div>

      <div className="container-app mx-auto w-full my-auto py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="max-w-[460px]">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Sign in with ease
              </h1>
              <p className="mt-3 text-sm leading-[1.6] text-white/80">
                Experience a seamless and efficient sign-in process that grants
                you instant access to a world of knowledge.
              </p>
            </div>

            <div className="relative w-full max-w-[548px] aspect-[4/3] mt-12 self-center lg:self-start">
              <Image
                src="/images/auth/auth.png"
                alt="ByteSpace Login Info Graphic"
                fill
                priority
                className=" object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
