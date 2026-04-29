import React from "react";
import { Card } from "@/components/ui/card";
import image1 from "@/assets/stel.jpeg";

export default function Support() {
  const team = [
    { image: image1, link: "https://www.instagram.com/steltech1?igsh=ejV2NjJxMzJ2MDNy&utm_source=qr", dis: "STEL TECH" },
    // { image: image1, link: "https://example.com/2" },
    // { image: image1, link: "https://example.com/3" },
    // { image: image1, link: "https://example.com/4" },
  ];

  return (
    <div className="flex flex-col gap-10 items-center pt-16 px-4 sm:px-8 md:px-10">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center px-2">
        <h1 className="font-poppin font-semibold text-2xl sm:text-3xl md:text-[40px] text-text leading-tight">
          Some of Our Amazing Supporters
        </h1>
        <p className="font-Nunito font-normal text-base sm:text-lg md:text-[22px] text-gray-text mt-2">
          People and companies who have worked with us
        </p>
      </div>

      {/* Supporters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-6xl">
        {team.map((t, index) => (
          <Card
            key={index}
            className="w-full bg-white shadow-md hover:shadow-lg rounded-xl transition-all duration-300"
          >
            <a href={t.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full h-[110px] sm:h-[120px] md:h-[130px] p-4 flex items-center justify-center">
                  <img
                    src={t.image}
                    alt={`Supporter ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-center font-Nunito text-sm sm:text-base md:text-lg font-bold mt-2">{t.dis}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
