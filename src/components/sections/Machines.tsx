"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const machines = [
  {
    name: "Fly Ash Brick Making Machine",
    image: "/img/p1.jpeg",
    points: [
      "Hydraulic pressure system",
      "Strong MS body construction",
      "Consistent brick quality",
      "Low maintenance",
    ],
  },
  {
    name: "Hydraulic Brick Press",
    image: "/img/p2.jpeg",
    points: [
      "High-pressure compaction",
      "Suitable for fly ash & concrete",
      "Optional PLC-based control",
    ],
  },
  {
    name: "Supporting Equipment",
    image: "/img/p3.jpeg",
    points: ["Pan mixer", "PLC control panel", "PVC / steel moulds"],
  },
];

export default function Machines() {
  return (
    <section id="machines" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Machines
          </h2>
          <p className="mt-3 text-slate-600">
            Machines designed for strength, durability, and high output.
          </p>
        </motion.div>

        {/* Machines Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full relative aspect-3/2">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {machine.name}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {machine.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
