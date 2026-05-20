import React from "react";
import logo from "@/assets/techlift.svg";
import bars from "../../assets/icons/hamburger.svg";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";


export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/event", label: "Events" },
    { to: "/resource", label: "Resources" },
    { to: "/sponsor", label: "Sponsor Us" },
    { to: "/contact", label: "Contact Us" },
  ];




  return (
    <>
      {/* 🌐 Top Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-white shadow-md fixed top-0 left-0 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Techlift logo" className="w-auto h-8" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 font-Nunito">
          {links.map((l, i) => (
            <NavLink
              key={i}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-bold border-b-2 border-purple-700 pb-1"
                  : "hover:text-purple-600 border-b-2 border-transparent pb-1 transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div>
          <Button onClick={() => window.open("https://forms.gle/ZEF5oYcAmSPakr3K9", "_blank")} className="bg-button-background hidden md:block">Join The Community</Button>
        </div>

        <img
          src={bars}
          alt="Open menu"
          role="button"
          aria-label="Open navigation drawer"
          onClick={() => setOpen(true)}
          className="p-2 block lg:hidden hover:border-dashed hover:border-2 border-purple-600 hover:rounded-md cursor-pointer"
        />
      </nav>

      <div
        className={`fixed inset-0 bg-white flex flex-col justify-between items-center px-8 py-10 z-50 transform transition-all duration-300 ease-in-out ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="w-full flex justify-between items-center">
          <img src={logo} alt="Techlift logo" className="w-auto h-8" />
          <X
            size={28}
            className="cursor-pointer hover:text-purple-600 transition"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 text-2xl font-Nunito flex-grow">
          {links.map((l, i) => (
            <NavLink
              key={i}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-bold border-b-2 border-purple-700 pb-1"
                  : "hover:text-purple-600 border-b-2 border-transparent pb-1 transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Button
          className="bg-button-background w-full lg:w-auto"
          onClick={() => window.open("https://forms.gle/ZEF5oYcAmSPakr3K9", "_blank")}
        >
          Join The Community
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}
    </>
  );
}
