import Link from "next/link";
import { FaMailchimp, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";
import { Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Us", href: "#why-us" },
  { name: "About", href: "#about" },
  { name: "Machines", href: "#machines" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative w-50 h-30">
              <Image
                src={"/img/logowhite.png"}
                fill
                alt="logo"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Manufacturer of fly ash brick and concrete block making machines.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Important Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Connect With Us
            </h4>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.youtube.com/channel/UCj8eU1EfdcroETxc5qgvFEQ"
                aria-label="youtube"
                className="hover:text-white transition"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="https://www.facebook.com/share/16yVceJNSG/"
                aria-label="Facebook"
                className="hover:text-white transition"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/bijoylakshmi_associates?igsh=MWVwejljZ2dmanV5bQ=="
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:bijoylakshmiassociates@gmail.com"
                aria-label="mail"
                className="hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bijoy Lakshmi Associates. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
