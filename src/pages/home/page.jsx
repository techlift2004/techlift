import React from "react";
import Hero from "./Hero";
import Insights from "./Insights";
import Happenings from "./Happening";
import LearningHub from "./LearningHub";
import SupportersAndTestimonials from "./SupportersAndTestimonials";

export default function page() {
  return (
    <div>
      <Hero />
      <Insights />
      {/* <Happenings /> */}
      <LearningHub />
      <SupportersAndTestimonials />
    </div>
  );
}
