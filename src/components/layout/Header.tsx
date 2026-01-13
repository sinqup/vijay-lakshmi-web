"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Us", href: "#why-us" },
  { name: "About", href: "#about" },
  { name: "Machines", href: "#machines" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur ">
        <div className="container mx-auto flex h-16 items-center justify-between px-5">
          {/* Logo */}
          <Link
            href="#home"
            className=" relative h-20 w-24 text-lg font-bold text-slate-900"
          >
            <Image
              src={"/img/logo.png"}
              alt="logo"
              fill
              className="object-contain object-center"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 rounded-md border border-orange-500 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition"
            >
              <Phone size={16} />
              Call
            </a>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-slate-800"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-slate-700"
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>

              {/* Nav Links */}
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-800"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="tel:9181121720"
                  className="flex items-center justify-center gap-2 rounded-md border border-orange-500 px-4 py-3 text-sm font-medium text-orange-600"
                >
                  <Phone size={16} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-medium text-white"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
