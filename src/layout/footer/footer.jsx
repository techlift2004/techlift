import React from "react";
import twitterIcon from "../../assets/icons/twitter(footer).svg";
import facebookIcon from "../../assets/icons/facebook(footer).svg";
import instagramIcon from "../../assets/icons/instagram(footer).svg";
import linkedInIcon from "../../assets/icons/linkedIn(footer).svg";
import companyIcon from "../../assets/techlift.svg";

const socials = [
  { href: "https://twitter.com/yourhandle", icon: twitterIcon },
  { href: "https://facebook.com/yourhandle", icon: facebookIcon },
  { href: "https://instagram.com/yourhandle", icon: instagramIcon },
  { href: "https://linkedin.com/yourhandle", icon: linkedInIcon },
];

const quickLinks = ["Home", "About Us", "Get Resources", "Sponsor Us"];
const resources = ["Blogs", "Events", "Learning Hubs"];
const support = [
  <>
    Join <span className="text-purple-600">Us</span>
  </>,
  "Documentation",
  "Help Center",
  "Contact Us",
];
const newsletter = ["Subscribe", "Archive", "Write for Us", "Contribute"];

export default function Footer() {
  return (
    <div className="bg-white px-[1.5rem] md:px-[5rem] py-12">
      <div className="border-b-[0.5px] border-[#7C7C7C] pb-10 md:flex flex-col justify-between lg:flex-row">
        <div className="max-w-sm mb-7">
          <img src={companyIcon} alt="company logo" className="h-10" />
          <p className="my-5 text-sm text-gray-600">
            Empowering the next Generation of Tech talent through learning.
          </p>
          <div className="flex gap-3 items-center mt-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={s.icon} alt="social-icon" className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:grid grid-cols-4 md:gap-10 justify-center items-start text-sm">
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Resources" links={resources} />
          <FooterColumn title="Support" links={support} />
          <FooterColumn title="Newsletter" links={newsletter} />
        </div>
      </div>

      <div className="mx-auto text-center w-full text-[#7C7C7C] text-xs mt-6">
        <p>&copy; 2025 TechLifts • Terms • Privacy</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col items-start">
      <p className="font-semibold mb-3 text-purple-600 lg:text-[#7c7c7c]">
        {title}
      </p>
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <a
            key={i}
            href="#"
            className="hover:text-purple-600 transition-colors text-[#7c7c7c]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
