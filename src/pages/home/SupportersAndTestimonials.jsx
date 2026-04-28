import React from "react";
import Support from "../about/id/support";
import logo from "@/assets/tech.png";

const SupportersAndTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David K",
      role: "Backend Developer",
      text: "TechLift didn’t just give me free resources — it helped me understand how to learn. The mentors were patient, the connections were real, and I now work as a junior backend engineer thanks to the guidance I received.",
      avatar: logo,
    },
    {
      id: 2,
      name: "Precious E",
      role: "Full Stack Developer",
      text: "I used to struggle with consistency and motivation. But being part of the TechLift community kept me accountable. I gained clarity, built a portfolio, and now I’m preparing for my first job interview with confidence.",
      avatar: logo,
    },
    {
      id: 3,
      name: "Emmanuel T",
      role: "Data Analyst",
      text: "The TechLift community feels like family. Everyone genuinely wants to see you win. I got help with data support, study buddy groups, and interview prep — all of which made my learning journey smoother.",
      avatar: logo,
    },
    {
      id: 4,
      name: "Sarah O",
      role: "UI/UX Designer",
      text: "I joined TechLift when I didn’t even know where to start. With the mentorship and real-life tech conversations, I went from beginner to landing freelance projects faster than I expected.",
      avatar: logo,
    },
  ];

  return (
    <section className="bg-purple-50 py-16">
      {/* Supporters Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <Support />
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center">
          Testimonials from Members
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Meet the leadership and advisor team behind TechLifts
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 text-start"
            >
              {/* Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mb-3"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-purple-700">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-4">{item.role}</p>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersAndTestimonials;
