"use client";
import SettingsTabs from "@/app/shared/components/tabs/settings.tabs";
import useGetMembership from "@/app/shared/hooks/useGetMembership";
import useSettingsFilter from "@/app/shared/hooks/useSettingFilter";
import { UserProfile } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  generateApiKey,
  regenerateApiKey,
} from "@/app/shared/utils/token.generator";
import { Snippet } from "@nextui-org/react";
import { ICONS } from "@/app/shared/utils/icons";
import toast from "react-hot-toast";

const Page = () => {
  const { data } = useGetMembership();
  const { activeItem } = useSettingsFilter();
  const [api_Key, setApi_key] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const apiKey = Cookies.get("api_key");
    if (!apiKey) {
      generateApiKeyHanlder();
    } else {
      setApi_key(apiKey);
    }
  }, []);

  const generateApiKeyHanlder = async () => {
    console.log("generateApi key handler ran");
    await generateApiKey().then((res) => {
      console.log(res);
      Cookies.set("api_key", res!);
      setApi_key(res!);
    });
  };

  const handleRegenerateApiKey = async () => {
    await regenerateApiKey().then((res) => {
      Cookies.set("api_key", res!);
      setApi_key(res!);
      toast.success("API key updated");
    });
  };

  const handleCopyLink = () => {
    if (api_Key) {
      navigator.clipboard.writeText(api_Key).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="w-full h-screen p-5">
      <SettingsTabs />
      {activeItem === "Customize Profile" && (
        <div className="w-full flex justify-center">
          <UserProfile routing="hash" />
        </div>
      )}
      {activeItem === "API Access" && (
        <div>
          {data[0]?.plan.includes("GROW") /*||
          data[0]?.plan.includes("LAUNCH")*/ ? (
            <div className="w-full flex justify-center items-center">
              <h3>Please update you subscription plan to get access of API</h3>
            </div>
          ) : (
            <div className="w-[80%] p-4">
              API key:
              <div className="p-4 bg-slate-300 rounded relative  ">
                <p className="break-words overflow-hidden whitespace-pre-line ">
                  {api_Key && api_Key.length > 100
                    ? api_Key.slice(0, 99) + "..."
                    : api_Key}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <div
                  className=" px-4 py-2 cursor-pointer rounded bg-[#DFE7FF]  flex items-center justify-center"
                  id="copy-btn"
                  onClick={handleCopyLink}
                >
                  <span className="text-lg">{ICONS.copy}</span>
                  <span className="pl-1">copy</span>
                </div>
                <div
                  className=" px-4 py-2  rounded bg-[#DFE7FF]  flex items-center justify-center cursor-pointer"
                  id="regenerate-btn"
                  onClick={handleRegenerateApiKey}
                >
                  <span className="text-lg">{ICONS.copy}</span>
                  <span className="pl-1">Regenerate</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
