import React, { useState } from "react";
import logo from "@/assets/techlift.svg";
import bars from "../../assets/icons/hamburger.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Nav() {
  const [smallScreen, setSmallScreen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/event", label: "Events" },
    { to: "/resources", label: "Resources" },
    { to: "/sponsor", label: "Sponsor Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full flex flex-row justify-between items-center px-10 py-5 bg-white shadow-md">
      <div className="flex justify-between items-center w-full">
        <img src={logo} alt="logo" />
        <img
          src={bars}
          alt="navlinks-controller"
          onClick={() => setSmallScreen((prev) => !prev)}
          className="p-2 block lg:hidden hover:border-2 border-purple-600 hover:rounded-md"
        />
      </div>
      <div className={`${smallScreen ? "block" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row gap-10 items-center font-Nunito">
          {links.map((l, i) => (
            <Link key={i} to={l.to} className="hover:text-purple-600">
              {l.label}
            </Link>
          ))}
        </ul>
        <Button className="bg-button-background">Join The Community</Button>
      </div>
    </div>
  );
}
