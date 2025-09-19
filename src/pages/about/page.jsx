import React from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/about/abouthero.svg";
import hero2 from "@/assets/about/abouthero2.svg";
import achive from "@/assets/icons/achive.svg";
import { Card } from "@/components/ui/card";
import vision from "@/assets/icons/vision.svg"
import mission from "@/assets/icons/mission.svg"
import purpose from "@/assets/icons/purpose.svg"
import Team from "@/pages/about/id/team"
import Support from "@/pages/about/id/support"

export default function page() {

    const mvp = [
        {
            icon: vision ,
            name: "Our Vison",
            discription: "To create a thriving ecosystem where designers and tech enthusiasts grow, collaborate, and use innovation to impact lives globally."

        },

          {
            icon: mission ,
            name: "Our Mission",
            discription: "To equip and empower individuals with design and tech skills through mentorship, resources, and real-world opportunities that foster creativity, growth, and problem-solving."

        },

           {
            icon: purpose ,
            name: "Our Purpose",
            discription: "To bridge the gap between passion and opportunity by building a community that nurtures talents, supports collaboration, and inspires change through technology and design."

        },
        
    ]

    return (
        <div>
            <div className="px-10 py-14 bg-linear-to-b to-[#7700CD] from-[#3C0067] flex flex-row justify-between items-center ">
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

                <div className="grid grid-cols-3 space-x-5 px-10">
                    {mvp.map((mvp, index) => (
                    <Card className="rounded-[30px] bg-gradient-to-b from-white/0 to-[#CA0928]/16 border-[1px] border-[#7700CD] ">
                        <div key={index} className="flex flex-col px-10 py-3 gap-4">
                            <img src={mvp.icon} alt="" width={55} height={55} />
                            <h2 className="font-Nunito font-semibold text-[24px] ">{mvp.name}</h2>
                            <p className="font-Nunito font-normal text-[16px] text-gray-text "> {mvp.discription} </p>
                        </div>

                    </Card>

                    ))}

                </div>
                    
                <Team />

                <Support />
            </div>
        </div>
    );
}
