"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const history = useRouter();
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col justify-center gap-4">
        <h1>Congratulations you have successfully subscribed to our Plan</h1>
        <button
          className="rounded bg-purple-500 px-4 py-2 text-white"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Back To Dashboard
        </button>
      </div>
    </div>
  );
};

export default Page;
