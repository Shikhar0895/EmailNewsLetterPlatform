"use client";
import React, { useEffect, useState } from "react";
import useGetMembership from "../shared/hooks/useGetMembership";
import { CardInfo } from "../configs/constants";
import Pricingcard from "../shared/components/cards/pricing.card.2";
import { Button } from "@nextui-org/react";
import { getMembership, getMembership2 } from "@/actions/get.membership";

const Page = () => {
  const { data, loading } = useGetMembership();
  const [active, setActive] = useState<"Monthly" | "Yearly">("Monthly");

  useEffect(() => {
    (async () => {
      const response = await getMembership2("user_2jRtjFMzXtYwe1XfD8E0vA5n2I5");
      const data = await response;
      console.log(data);
    })();
  }, []);

  if (loading)
    return (
      <div className="p-4 flex justify-center items-center">Loading .....</div>
    );
  return (
    <div className="p-7 min-h-screen bg-gradient-to-br from-slate-50 to-slate-900 via-slate-400">
      Current Plan : {data[0]?.plan}
      <hr />
      You might want to upgrade to Plans listed below:
      <div className="flex items-center my-6 md:mt-0 justify-end">
        <Button
          className={`${
            active === "Monthly"
              ? "bg-[#3843D0] text-white"
              : "bg-white text-black"
          } rounded-r-[0] !p-7 text-2xl !px-16 border border-[#000]`}
          onClick={() => setActive("Monthly")}
        >
          Monthly
        </Button>
        <Button
          className={`${
            active === "Yearly"
              ? "bg-[#3843D0] text-white"
              : "bg-white text-black"
          } rounded-l-[0] !p-7 text-2xl !px-16 border border-[#000]`}
          onClick={() => setActive("Yearly")}
        >
          Yearly
        </Button>
      </div>
      <div
        className="flex flex-wrap gap-10 w-full justify-center"
        id="pricingCardsContainer"
      >
        {CardInfo.filter(
          (pricingCard) => pricingCard.cardTitle !== "LAUNCH"
        ).map((i) => {
          return <Pricingcard key={i.cardTitle} PlanInfo={i} active={active} />;
        })}
      </div>
    </div>
  );
};

export default Page;
