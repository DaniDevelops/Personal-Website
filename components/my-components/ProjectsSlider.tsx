"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { projects } from "@/constants";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import SwiperBtns from "./SwiperBtns";

export default function ProjectsSlider() {
  const [project, setProject] = useState(projects[projects.length - 1]);
  function handleSlideChange(swiper: SwiperClass) {
    //  get current slide index
    const currIndex = Math.abs(swiper.activeIndex - (projects.length - 1));
    console.log(currIndex);

    // update project state based on index
    setProject(projects[currIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* content */}
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-1/2">
              {/* project num */}
              <div className="text-8xl leading-none font-semibold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/*  tools used*/}
              <ul className="flex gap-4 flex-wrap">
                {project.tools.map((tool, index) => (
                  <li key={index} className="text-xl text-accent">
                    {tool}
                    {/* remove the last comma */}
                    {index !== project.tools.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20" />
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live website */}
                <Link href={project.liveWebsite} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center text-3xl items-center group">
                        <ArrowUpRight className="text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Website</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repo */}
                <Link href={project.githubRepo}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center text-3xl items-center group">
                        <FaGithub className="text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects
                .map((_, index) => index)
                .sort((a, b) => (projects[a] > projects[b] ? 1 : -1))
                .map((index) => (
                  <SwiperSlide key={projects[index].num} className="w-full">
                    <div className="h-[460px] relative items-center flex justify-center group bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                      {/* Image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={projects[index].image}
                          fill
                          alt="project image"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              <SwiperBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl: justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
