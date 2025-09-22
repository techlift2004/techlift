import React from "react";
import logo from "@/assets/techlift.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-10 py-5 bg-white shadow-md">
      <div className="">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex flex-row gap-10 items-center font-Nunito text-">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link>Blog</Link>
        <Link to="event">Events</Link>
        <Link>Resources</Link>
        <Link>Sponsor Us</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>

      <Button className="bg-button-background ">Join The Community</Button>
    </div>
  );
}
