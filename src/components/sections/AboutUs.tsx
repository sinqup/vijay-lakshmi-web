"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container w-full md:max-w-[90%] mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              About Bijoy Lakshmi Associates
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Bijoy Lakshmi Associates is engaged in the manufacturing of fly
              ash brick and concrete block making machines, built to meet the
              demands of continuous industrial production.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our focus is on machine durability, consistent output, and
              practical engineering — ensuring our customers get long-term value
              and dependable performance.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Every machine is designed with real production challenges in mind,
              backed by technical support and service guidance.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-80 md:h-100 rounded-lg overflow-hidden"
          >
            <Image
              src="/img/aboutus.jpg"
              alt="Brick Making Machine Manufacturing"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
