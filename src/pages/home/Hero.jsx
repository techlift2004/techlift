import React from "react";
import PostHero from "./PostHero";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      {/* <div className="bg-[#ECD3FF3B] w-[41rem] h-[41rem] absolute left-[-16rem] top-[-5rem] rounded-full"></div> */}
      <div className="bg-[#ECD3FF3B] w-[43.5rem] h-[23rem] md:h-[47rem] top-[-4.25rem] left-[-35.4375rem] md:left-[-18.4375rem] rotate-0 opacity-100 absolute rounded-full"></div>
      <section className="bg-[#F3EFFF] min-h-screen flex items-center justify-center px-6 lg:px-20 py-16 pt-[6rem]">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              <span className="w-[4rem] md:w-[7rem]">
                <img src="/rideArrow.svg" alt="dotted-arrow" />
              </span>
              Building the Next
              <span className="absolute">
                <img src="/thickers.svg" alt="dotted-arrow" />
              </span>{" "}
              <br />
              Generation oF
              <br /> <span className="text-[#6C4AF2]">Tech</span> Leaders
            </h1>

            <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-lg text-start">
              At TechLift, we believe in the power of collaboration and
              continuous learning. Through workshops, webinars, and curated
              resources, we connect you with opportunities that accelerate your
              growth. Join us today and be part of a vibrant tech movement.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">
              <Link
                to="/"
                className="block md:hidden mx-auto text-center bg-[#6C4AF2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#583cd9] transition-all duration-300"
              >
                Join the community
              </Link>
              <a
                href="#events"
                className="text-[#6C4AF2] font-semibold italic text-base flex justify-between items-center gap-1 mx-auto md:mx-0"
              >
                See Upcoming Events{" "}
                <span>
                  <img
                    src="/ArrowDownRight.svg"
                    alt="arrowBtn"
                    className="w-[1.2rem]"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-x-6 max-w-md mx-auto">
            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/yellow frame.svg"
                alt="Person 1"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/green frame.svg"
                alt="Person 2"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/blue frame.svg"
                alt="Person 3"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/orange frame.svg"
                alt="Person 4"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <PostHero />
    </>
  );
}
