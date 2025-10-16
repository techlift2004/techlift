import React from "react";

const Insights = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 tracking-wide mb-4">
          INSIGHTS & UPDATES
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
          TechLift is more than a community it's a movement of young, passionate
          minds reshaping the future of technology across Africa and beyond.
        </p>

        {/* <div className="rounded-2xl overflow-hidden shadow-md mx-auto"> */}
          <img
            src="/insights.svg" // replace with your actual image path
            alt="Students collaborating on laptops"
            className="w-[fit-content] h-auto mx-auto"
          />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Insights;
