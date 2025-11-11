import React from "react";
import logo from "@/assets/techlift.svg";
import bars from "../../assets/icons/hamburger.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Nav() {
  const [smallScreen, setSmallScreen] = React.useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/event", label: "Events" },
    { to: "/resource", label: "Resources" },
    { to: "/sponsor", label: "Sponsor Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center px-10 py-5 bg-white shadow-md fixed mt-0 z-50">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <img src={logo} alt="logo" />
        <img
          src={bars}
          alt="navlinks-controller"
          onClick={() => setSmallScreen((prev) => !prev)}
          className="p-2 block lg:hidden hover:border-2 border-purple-600 hover:rounded-md cursor-pointer"
        />
      </div>
      <div
        className={`${
          smallScreen ? "flex" : "hidden"
        } flex-col gap-5 items-start my-5 lg:my-auto lg:items-center lg:flex lg:flex-row lg:gap-10 font-Nunito`}
      >
        {links.map((l, i) => (
          <Link key={i} to={l.to} className="hover:text-purple-600">
            {l.label}
          </Link>
        ))}
      </div>
       <Button className="bg-button-background w-full lg:w-auto">
          Join The Community
        </Button>
    </div>
  );
}
