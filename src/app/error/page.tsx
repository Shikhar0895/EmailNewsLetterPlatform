"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const history = useRouter();
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col justify-center gap-4">
        <h1>Your last transaction was declined</h1>
        <button
          className="rounded bg-purple-500 px-4 py-2 text-white"
          onClick={() => {
            history.push("/");
          }}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Page;
