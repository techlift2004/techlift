import React from "react";
import { Card } from "@/components/ui/card";
import image1 from "@/assets/techlift.svg";

export default function Support() {
  const team = [
    { image: image1, link: "https://example.com/1" },
    { image: image1, link: "https://example.com/2" },
    { image: image1, link: "https://example.com/3" },
    { image: image1, link: "https://example.com/4" },
  ];

  return (
    <div className="flex flex-col gap-10 items-center pt-20 px-10 overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="font-poppin font-semibold text-[40px] text-text">
          Some of Our Amazing Supporters
        </h1>
        <p className="font-Nunito font-normal text-[22px] text-gray-text">
          people and companies who have worked with us
        </p>
      </div>

      {/* marquee wrapper */}
      <div className="overflow-hidden w-full relative">
        <div className="flex animate-marquee space-x-20">
          {team.map((t, index) => ( // duplicated for smooth loop
            <Card key={index} className="w-[200px] flex-shrink-0">
              <a href={t.link} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={`Supporter ${index}`}
                    className="w-full p-4 max-h-[100px]"
                  />
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
