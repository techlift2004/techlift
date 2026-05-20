import React from "react";

const LearningHub = () => {
  const items = [
    {
      title: "E-book & Guides",
      desc: "Downloadable PDFs or mini-books.",
      img: "/e-books.svg",
      link: "/resource",
    },
    {
      title: "Community Resources",
      desc: "FAQs, Share Experiences.",
      img: "/resources.svg",
      link: "/resource",
    },
    {
      title: "Case Studies, Success Story",
      desc: "Real life success story by TechLifts.",
      img: "/case-studies.svg",
      link: "/resource",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-3">
          Learning Hub
        </h2>
        <p className="text-gray-600 mb-10 text-center mx-auto">
          Empowering you with guides, tools, and insights to grow your career in
          tech.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <a
            href={item.link}
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-5 flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-5 w-full h-[15rem] md:h-[12rem] lg:h-[15rem] object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
