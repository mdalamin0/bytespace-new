"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-[500px] bg-white rounded-4xl p-8 md:p-15 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 text-left">
      <span className="text-sm  text-blue tracking-wide">
        Create an Account
      </span>

      <h2 className="text-4xl font-semibold text-[#171717] mt-2 mb-10 tracking-tight">
        Welcome to <br /> ByteSpace
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-bold text-[#171717]">Full Name</label>
          <input
          id="name"
            type="text"
            placeholder="Jamie Davis"
            className="w-full bg-white border border-gray-200/80 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue/50 focus:ring-1 focus:ring-blue/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold text-[#171717]">Email</label>
          <input
          id="email"
            type="email"
            placeholder="designer@example.com"
            className="w-full bg-white border border-gray-200/80 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue/50 focus:ring-1 focus:ring-blue/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xs font-bold text-[#171717]">Password</label>
          <input
          id="password"
            type="password"
            placeholder="********"
            className="w-full bg-white border border-gray-200/80 rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue/50 focus:ring-1 focus:ring-blue/50 transition-all"
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </form>

      <div className="mt-28 pt-4 border-t border-gray-50 text-center text-xs font-medium text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-blue font-bold hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
