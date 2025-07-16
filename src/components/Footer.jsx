import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 px-6 py-20 text-white relative backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-zinc-400 text-sm">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link to="/workflow" className="hover:text-white transition">
            How we operate
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-4 text-zinc-400 mt-2">
          <a
            href="https://www.instagram.com/nexora_visualss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            📷 Instagram
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-md text-zinc-500 mt-4">
          © {new Date().getFullYear()} Nexora Visuals. All rights reserved.
          <p className="text-md text-zinc-500">
            Website made with ❤️ by{" "}
            <a
              href="https://antinity.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 no-underline hover:text-white transition"
            >
              Antinity
            </a>
            <p className="text-xs text-zinc-500 mt-2">
              We don’t track you. There are no cookies this time.
            </p>
          </p>
        </p>

        {/* BIG NAME */}
        <h1 className="text-5xl sm:text-[240px] text-white/90 font-brand">
          NEXORA VISUALS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
