import React from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/about/abouthero.svg";
import hero2 from "@/assets/about/abouthero2.svg";
import achive from "@/assets/icons/achive.svg";

export default function page() {
  return (
    <div>
      <div className="px-10 py-14 bg-linear-to-b to-[#7700CD] from-[#3C0067] flex flex-row  ">
        <div className="flex flex-col items-start gap-6  max-w-[760px] ">
          <h1 className="text-[48px] font-Nunito font-bold text-white  ">
            Empowering the Next Generation of Tech Talents through learning and
            collaboration
          </h1>
          <p className="font-normal max-w-[580px] text-white font-Nunito text-[20px]">
            Your Number 1 Plug For Finding Talented Professionals. You are sure
            to get trusted, creative and details professionals all over the
            world.
          </p>
          <Button className="bg-button-background rounded-2xl py-6 px-10 ">
            Explore Platform
          </Button>
        </div>

        <div className="flex flex-row gap-0 items-center">
          <img src={hero2} className="max-w-[215px] h-[404px]" alt="" />
          <img src={hero1} className="max-w-[316x] h-[404px]" alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex flex-row items-center gap-3  px-20 bg-white py-2 rounded-[15px]  ">
          <p className="text-[20px] font-normal font-Nunito">
            Our Vision, Mission & Purpose
          </p>
          <img src={achive} alt="" width={38} height={38} />
        </div>

        <p className="font-poppin font-semibold text-[36px] text-text ">
          Driven By Passion, What we stand for
        </p>
      </div>
    </div>
  );
}
