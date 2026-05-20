import React from "react";
import { Button } from "@/components/ui/button";
import achive from "@/assets/icons/achive.svg";
import { Card } from "@/components/ui/card";
import vision from "@/assets/icons/vision.svg";
import mission from "@/assets/icons/mission.svg";
import purpose from "@/assets/icons/purpose.svg";
import Team from "@/pages/about/id/team";
import Support from "@/pages/about/id/support";

export default function Page() {
  const mvp = [
    {
      icon: vision,
      name: "Our Vision",
      description:
        "To create a thriving ecosystem where designers and tech enthusiasts grow, collaborate, and use innovation to impact lives globally.",
    },
    {
      icon: mission,
      name: "Our Mission",
      description:
        "To equip and empower individuals with design and tech skills through mentorship, resources, and real-world opportunities that foster creativity, growth, and problem-solving.",
    },
    {
      icon: purpose,
      name: "Our Purpose",
      description:
        "To bridge the gap between passion and opportunity by building a community that nurtures talents, supports collaboration, and inspires change through technology and design.",
    },
  ];

  return (
    <div className="w-full pt-20">
      {/* HERO SECTION */}
      <div className="px-6 sm:px-10 py-14 bg-gradient-to-b from-[#3C0067] to-[#7700CD] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* Left content */}
        <div className="flex flex-col items-center md:items-start gap-6 max-w-[760px] text-center lg:text-left">
          <h1 className="text-[42px] sm:text-3xl md:text-4xl lg:text-[48px] font-Nunito font-bold text-white leading-snug">
            About Us
          </h1>
          <p className="font-normal text-base sm:text-lg md:text-[20px] text-white font-Nunito max-w-[580px] mx-auto lg:mx-0">
            Empowering the Next Generation of Tech Talents through Learning and Collaboration.
          </p>
          <Button className="bg-button-background rounded-2xl py-4 px-8 text-white font-semibold hover:opacity-90 transition">
            Explore Platform
          </Button>
        </div>

        {/* Right Images */}
        <div className="flex flex-row gap-4 items-center justify-center relative">
          <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.5)] z-10 translate-y-8 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80"
              className="max-w-[140px] sm:max-w-[180px] md:max-w-[215px] h-[160px] md:h-[220px] rounded-[12px] object-cover"
              alt="Team strategy meeting"
            />
          </div>
          <div className="rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.4)] rotate-2 z-0 -translate-x-8 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
              className="max-w-[200px] sm:max-w-[260px] md:max-w-[316px] h-[250px] sm:h-[300px] md:h-[360px] rounded-[12px] object-cover"
              alt="Creative collaboration"
            />
          </div>
        </div>
      </div>

      {/* VISION, MISSION, PURPOSE SECTION */}
      <div className="flex flex-col items-center gap-6 py-14 px-6 sm:px-8 md:px-10">
        {/* Header */}
        <div className="flex flex-row items-center justify-center gap-3 bg-white py-2 px-4 sm:px-8 rounded-[15px] shadow-sm">
          <p className="text-base sm:text-lg md:text-[20px] font-normal font-Nunito">
            Our Vision, Mission & Purpose
          </p>
          <img src={achive} alt="Achieve" width={32} height={32} />
        </div>

        <p className="font-poppin font-semibold text-2xl sm:text-3xl md:text-[36px] text-text text-center">
          Driven by Passion — What We Stand For
        </p>

        {/* MVP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 md:px-10">
          {mvp.map((item, index) => (
            <Card
              key={index}
              className="rounded-[30px] bg-gradient-to-b from-white/0 to-[#CA0928]/16 border border-[#7700CD] p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-4 text-center sm:text-left">
                <img src={item.icon} alt={item.name} width={55} height={55} />
                <h2 className="font-Nunito font-semibold text-xl sm:text-2xl">
                  {item.name}
                </h2>
                <p className="font-Nunito font-normal text-sm sm:text-base text-gray-text leading-relaxed">
                  {item.description}
                </p>
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
