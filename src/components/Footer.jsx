import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      linkName: "Home",
      url: "/",
    },
    {
      id: 2,
      linkName: "Product",
      url: "/products",
    },
    {
      id: 3,
      linkName: "About",
      url: "/about",
    },
    {
      id: 4,
      linkName: "Contact",
      url: "/contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      socialName: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      socialName: "Instagram",
      url: "https://www.instagram.com",
    },
    {
      id: 3,
      socialName: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      id: 4,
      socialName: "Github",
      url: "https://www.github.com",
    },
  ];
  return (
    <div className="w-full bg-slate-800 text-white">
      <div className="w-full max-w-[1300px] m-auto h-[8rem] flex gap-1 py-2">
        <div className=" pl-4 w-[40%]">
          <h3 className="text-xl font-bold text-yellow-500">MeroPasal</h3>
          <p className="text-[10px]  font-light opacity-50 ">
            Discover an extensive collection of top-quality products.
          </p>
        </div>
        <div className="quick-link w-[30%]">
          <h3 className="text-sm font-medium mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((curLink) => {
              return (
                <li
                  key={curLink.id}
                  className="text-xs font-extralight text-slate-100"
                >
                  <NavLink to={curLink.url}>{curLink.linkName}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-links w-[30%]">
          <h3 className="text-sm font-medium mb-2">Social Links</h3>
          <ul className="flex flex-col gap-1">
            {socialLinks.map((curLink) => {
              return (
                <li
                  key={curLink.id}
                  className="text-xs font-extralight text-slate-100"
                >
                  <a href={curLink.url} target="_blank">
                    {curLink.socialName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copyright-info w-full h-[2rem] flex items-center justify-center px-4">
        <p className="text-xs font-light">
          Copyright&#169;2023 | Developed by&nbsp;
          <span className="text-yellow-500 text-sm font-medium">
            Sagar Karki
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
