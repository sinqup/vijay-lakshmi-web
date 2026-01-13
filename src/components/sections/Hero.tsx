"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen md:h-[60vh] xl:h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/img/hero.jpeg"
        alt="Fly Ash Brick Making Machine"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 flex  h-full md:h-full mt-auto md:flex-col md:justify-center xl:flex-row items-center">
        <div className="w-full md:max-w-[90%] mx-auto h-[50vh] md:h-full flex flex-col  justify-center  md:justify-center gap-5 p-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
              Fly Ash Brick Making Machines
            </h1>

            <p className="mt-4 text-sm md:text-lg text-slate-200 flex w-full justify-center md:justify-normal gap-2 md:gap-3 lg:gap-5">
              <span>Heavy-Duty</span> • <span>Hydraulic</span> •{" "}
              <span>High Production</span>
            </p>

            {/* CTA Buttons */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2  md:w-max gap-4">
              <a
                href="tel:9181121720"
                className="w-full justify-center inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600 transition"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/9181121720"
                target="_blank"
                className="w-full justify-center inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 transition"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
