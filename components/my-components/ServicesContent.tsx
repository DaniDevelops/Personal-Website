"use client";
import { services } from "@/constants";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function ServicesContent() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service) => (
          <div
            className="flex flex-col flex-1 justify-center gap-6 group"
            key={service.type}
          >
            <div className="w-full justify-between flex items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500 transition-all">
                {service.num}
              </div>
              <Link
                href={service.link}
                className="w-[72px] h-[72px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <ArrowDownRight className="text-primary" size={25} />
              </Link>
            </div>
            {/* type of service */}
            <h2 className="text-2xl xl:text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {service.type}
            </h2>
            {/* service  description */}
            <p className="text-white/60 ">{service.description}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
