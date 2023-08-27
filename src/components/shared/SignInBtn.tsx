"use client";
import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
const SignInBtn = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      {" "}
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton mode="modal">
          <button className="text-lg font-medium py-2 px-3 rounded text-emerald-50 bg-blue-500 hover:bg-blue-600">
            Sign In
          </button>
        </SignInButton>
      )}
    </div>
  );
};

export default SignInBtn;
