"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import DashboardOverviewCard from "@/app/shared/components/cards/overview.card";
import SubscribersChart from "@/app/shared/components/charts/subscribers.chart";
// import { Button } from "@nextui-org/react";
import { Button } from "@/app/shared/ui";
import { ICONS } from "@/app/shared/utils/icons";
import toast from "react-hot-toast";
import Link from "next/link";

const Main = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="p-5 w-full bg-[#f9fafb] flex flex-col justify-center">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.username}
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      <div>
        <div className="w-full flex justify-between">
          <div
            className="w-[60%] px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
            onClick={handleCopyLink}
          >
            <small
              className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                copied ? "bg-blue-200" : "bg-transparent"
              }`}
            >
              {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
              {user?.username}
            </small>
            <Button
              icon={ICONS.copy}
              text="copy"
              type={"ghost"}
              style="absolute right-0"
            />
          </div>
          <Button
            icon={ICONS.write}
            text="Start Writing"
            style="bg-black text-white text-lg rounded !px-6"
          />
        </div>
        <h4 className="font-medium">Home Page</h4>
      </div>
      <div className="w-[70%] flex">
        <div className="w-full min-h-[88vh] pr-5">
          <br />
          <DashboardOverviewCard />
          <SubscribersChart />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;

{
  /* <div className="w-[35%] p-5"> */
}
{
  /* create newsletter button */
}

<br />;
{
  /* resources */
}

{
  /* tutorial */
}
{
  /* <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Tutorials</h5>
            <p className="text-sm opacity-[.7]">
              Learn how to get started on becodemy and utilize all our features,
              directly from the becodemy team.
            </p>
            <br />

            <Button icon={ICONS.link} text="Tutorials" />
          </div> */
}
{
  /* Need help */
}
{
  /* <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Need help?</h5>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Knowledge base</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">API Documentation</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Blog</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">FAQ</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
          </div> */
}
{
  /* </div> */
}
