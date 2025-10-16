import React from "react";
import Support from "../about/id/support";

const SupportersAndTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Janet Doe",
      role: "Technical Operator, UAE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim net, proin faucibus nibh et sagittis a.",
      avatar: "/Avatars.svg",
    },
    {
      id: 2,
      name: "Janet Doe",
      role: "Technical Operator, UAE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim net, proin faucibus nibh et sagittis a.",
      avatar: "/Avatars.svg",
    },
    {
      id: 3,
      name: "Janet Doe",
      role: "Technical Operator, UAE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim net, proin faucibus nibh et sagittis a.",
      avatar: "/Avatars.svg",
    },
    {
      id: 4,
      name: "Janet Doe",
      role: "Technical Operator, UAE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim net, proin faucibus nibh et sagittis a.",
      avatar: "/Avatars.svg",
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
