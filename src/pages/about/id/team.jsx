"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import websites from "@/assets/icons/website.png";
import linkedins from "@/assets/icons/linkedin.svg";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase.from("team_members").select("*");
      if (error) {
        console.error("Error fetching team:", error);
      } else {
        setTeam(data);
      }
      setLoading(false);
    };
    fetchTeam();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center pt-16 px-5 sm:px-8 md:px-10 pb-20">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center gap-2">
        <h1 className="font-poppin font-semibold text-[28px] sm:text-[34px] md:text-[40px] text-text">
          The Brains Behind the Magic
        </h1>
        <p className="font-Nunito font-normal text-[16px] sm:text-[18px] md:text-[20px] text-gray-text max-w-[600px]">
          Meet the leadership and advisor team behind TechLift
        </p>
      </div>

      {loading ? (
        <p className="text-gray-500 text-lg">Loading team members...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {team.map((member) => (
            <Card
              key={member.id}
              className="w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center h-full pb-5">
                <img
                  src={member.image_url}
                  alt={member.name}
                  className="w-[19rem] px-4 py-3 h-[20rem]"
                />
                <div className="flex flex-col justify-between items-center pt-3 gap-5 flex-grow w-full px-3 sm:px-5">
                  <div className="flex flex-col items-center text-center">
                    <h2 className="font-Inter font-medium text-text text-[18px] sm:text-[20px] md:text-[22px]">
                      {member.name}
                    </h2>
                    <p className="font-Inter font-normal text-gray-text text-[14px] sm:text-[15px] md:text-[16px]">
                      {member.role}
                    </p>
                  </div>

                  <hr className="border-[1px] w-full" />

                  <div className="flex flex-row gap-3 items-center p-3 rounded-[8px] bg-[#FFF4F4]">
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <img
                        src={websites}
                        alt="website"
                        className="w-5 sm:w-6"
                      />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <img
                        src={linkedins}
                        alt="linkedin"
                        className="w-5 sm:w-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
