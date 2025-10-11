const PostHero = () => {
  return (
    <div className="bg-[#F6ECFD] border-y-2 border-dashed border-[#4B0081] p-5 md:py-5 lg:px-40 text-center my-20">
      <div className="flex w-full justify-start">
        <img
          src="/quoteLeft.svg"
          alt="quote"
          className="w-[3.5rem] md:w-[5rem]"
        />
      </div>
      <div className="my-5">
        <h1 className="text-[#4B0081] mt-[-1rem] lg:mt-[-4rem] mb-5 font-extrabold md:text-2xl">
          DRIVEN BY TECHLIFT'S SPIRIT
        </h1>
        <h4 className="max-w-[18rem] md:max-w-[38rem] md:text-xl mx-auto text-start font-normal">
          TechLift was born to inspire, connect, and empower innovators We
          create opportunities for learners and professionals to grow,
          collaborate, and thrive in tech. From workshops to mentorship
          everything we do is rooted in one belief together, we can lift each
          other higher.
        </h4>
      </div>
      <div className="flex w-full justify-end">
        <img
          src="/quoteRight.svg"
          alt="quote"
          className="w-[3.5rem] md:w-[5rem]"
        />
      </div>
    </div>
  );
};

export default PostHero;
