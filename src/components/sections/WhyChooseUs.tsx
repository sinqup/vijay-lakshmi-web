"use client";

import { motion } from "framer-motion";
import { Factory, Settings, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Manufacturing Expertise",
    description:
      "Years of experience in designing and manufacturing brick making machines.",
  },
  {
    icon: Settings,
    title: "Heavy-Duty Build",
    description:
      "Robust machines built for continuous production and long operational life.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Performance",
    description: "Consistent output with minimal downtime and low maintenance.",
  },
  {
    icon: Wrench,
    title: "Service Support",
    description:
      "Technical support and guidance even after machine installation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container w-full md:max-w-[90%] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Bijoy Lakshmi Associates
          </h2>
          <p className="mt-3 text-slate-600">
            Built for production. Designed for reliability.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <item.icon className="h-8 w-8 text-orange-500" />

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
