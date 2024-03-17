"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/YDF7o7ksq9F
 */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

//redirect is a function to redirect the user to the page they were trying to access
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const signIn = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    //redirect to content/home
    document.location.href = "/content/home";
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-400 via-red-300 to-yellow-200">
      <div className="flex w-[400px] flex-col items-center rounded-lg bg-white p-10 shadow-lg">
        <div className="mb-8 flex w-full flex-col items-center">
          <div className="mb-4 h-16 w-16 rounded-lg bg-gray-200 p-2 text-center">
            <span className="text-lg font-semibold">logo</span>
          </div>
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-sm text-gray-500">
            Use the account below to sign in.
          </p>
        </div>
        <form className="w-full space-y-6" action={signIn}>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="Email" type="email" />
          </div>
          <div className="relative">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? (
              <EyeOffIcon
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeIcon
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <Link className="mt-4 text-sm text-blue-600" href="#">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}

function EyeOffIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}