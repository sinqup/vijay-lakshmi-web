"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Looking for a Fly Ash Brick Making Machine?
          </h2>

          <p className="mt-4 text-slate-300">
            Get expert guidance and the right machine for your production needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:9181121720"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/9181121720"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 transition"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
