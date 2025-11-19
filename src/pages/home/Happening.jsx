import React from "react";

const Happenings = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-purple-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 mb-3">
          What's Happening at TechLift
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10">
          Join learning sessions, workshops, and networking opportunities driven
          by the TechLift community.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div>
          </div>
          <iframe
            className="w-full h-64 md:h-96 rounded-2xl"
            src="https://www.youtube.com/@Techlift-official" // replace with your actual video link
            title="Breaking into Tech From Beginner to Professional"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Happenings;
