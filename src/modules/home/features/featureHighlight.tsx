import Image from "next/image";
import React from "react";

const featureHighlight = () => {
  return (
    <div className="w-full md:flex items-center bg-[#9399F4] py-5 text-center md:py-0 md:text-left md:min-h-[55vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
    </div>
  );
};

export default featureHighlight;
