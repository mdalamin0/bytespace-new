"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="w-full max-w-[500px] bg-white rounded-4xl p-6 md:p-15 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 text-left">
      <span className="text-sm text-blue tracking-wide">Sign In</span>

      <h2 className="text-3xl font-semibold text-[#171717] mt-2 mb-10 tracking-tight">
        Welcome Back
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email"  className="text-xs font-bold text-[#171717]">Email</label>
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
            Sign In
          </Button>
        </div>
      </form>

      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <span className="relative bg-white px-4 text-xs text-gray-400 font-medium">
          or
        </span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button type="button" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-gray-200 text-lg text-black transition-colors hover:bg-gray-50">
          <FaFacebook />
        </button>
        <button type="button" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-gray-200 text-lg text-black transition-colors hover:bg-gray-50">
          <FaGoogle />
        </button>
      </div>

      <div className="mt-14 pt-4 border-t border-gray-50 text-center text-xs font-medium text-gray-400">
        New user?{" "}
        <Link href="/register" className="text-blue font-bold hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
}
