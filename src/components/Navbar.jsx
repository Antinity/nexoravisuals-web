import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-10 bg-black/20 backdrop-blur-3xl">
      <div className="container mx-auto text-foreground flex items-center justify-between px-4 py-2 ">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 mr-8 hover:scale-110 transition"
          />
        </Link>

        <div className="flex gap-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="no-underline text-foreground hover:text-white hover:bg-white/10 rounded-2xl px-4 py-1 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
