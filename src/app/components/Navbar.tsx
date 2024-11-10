"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavbarLinks";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path:"/"
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex flex-wrap items-center justify-between mx-auto p-8 mt-[-15px] mb-3 bg-[#121212] bg-opacity-100 px-4 z-50 ">
      <div className="flex-1">
        <h2 className="text-5xl font-semibold text-white font-mono">Coder.</h2>
      </div>

      <div className=" mobile-menu z-50 block md:hidden relative">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className=" flex items-center px-3 py-2 border rounded border-slate-200  hover:text-white hover:border-white text-slate-200"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
          >
            <XMarkIcon className="h-5 w-5 " />
          </button>
        )}
      </div>

      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 flex-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </header>
  );
}
