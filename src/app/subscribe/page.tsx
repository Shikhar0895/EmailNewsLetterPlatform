"use client";

toast;

import { subscribe } from "@/actions/add.subscribe";
import { useRouter, useSearchParams } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IconContext } from "react-icons";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useRouter();
  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const subscriberData = await subscribe({ email: value, username });
      if (!subscriberData) toast.error(subscriberData);
      else {
        toast.success("You are successfully subscribed");
        history.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    setValue("");
  };

  return (
    <>
      <div
        className="absolute top-5 left-5 cursor-pointer text-[#3b82f6] text-4xl "
        onClick={() => history.push("/dashboard")}
      >
        <IoChevronBackCircle />
      </div>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-7xl pb-8 capitalize">{username} NewsLetter</h1>
        </div>
        <form
          className="flex w-full max-w-md border rounded overflow-hidden"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="email"
            name="email"
            id=""
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your Email"
            className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
