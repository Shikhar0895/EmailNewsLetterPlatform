import { partners } from "@/app/configs/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const branding = () => {
  return (
    <div className="border-t border-b border-[#000] py-10">
      <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">
        CREATED BY EARLY MORNING BREW TEAM
      </h3>
      <div className="w-full text-center pt-1">
        <h3 className="uppercase bg-[#F091DD] rounded text-xl md:text-2xl text-center inline-block font-medium z-20 relative">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>
      <Marquee className="w-full flex">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image
              src={i.url}
              key={i.url}
              width={200}
              height={200}
              alt="partner"
              className={`md:mx-8 w-[150px] md:w-[180px] mx-3`}
            />
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default branding;
