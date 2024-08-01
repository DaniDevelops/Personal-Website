"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutMe, education, experience } from "@/constants";
import { ScrollArea } from "../ui/scroll-area";
import { TooltipProvider } from "../ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { FaReact, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import {
  SiMicrosoftazure,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = {
  title: "Technologies Mastered",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, autem eius! Explicabo reiciendis maxime quam? Maiores, tempore. Ab consequatur vel sunt dignissimos! Accusantium suscipit laudantium porro incidunt dolor optio ea.",
  technologiesList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "Azure",
    },
  ],
};

export default function ResumeContent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* resume tab triggers */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="aboutMe">About</TabsTrigger>
          </TabsList>
          {/* resume content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.experience.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[26opx] min-h-[60px] text-center lg:text-left">
                          {item.role}
                        </h3>
                        <p className="text-xs lg:text-sm text-white/60">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-lg lg:text-xl mb-2">Education</h2>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.education.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[26opx] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.school}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-lg lg:text-xl mb-2">Skills</h2>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[26opx] min-h-[60px] text-center lg:text-left">
                            {skill.name}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{skill.school}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-lg lg:text-xl mb-2">Education</h2>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.certifications.map((certification, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[26opx] min-h-[60px] text-center lg:text-left">
                            {certification.cerficate}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {certification.organistaion}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="technologies" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{technologies.title}</h3>
                  <p className="text-white/60 mx-auto xl:mx-0 max-w-[600px]">
                    {technologies.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {technologies.technologiesList.map((technology) => (
                      <li key={technology.name}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {technology.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{technology.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutMe"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{aboutMe.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {aboutMe.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 max-w-[620px]">
                  {aboutMe.info.map((info) => (
                    <li
                      key={info.fieldName}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{info.fieldName}:</span>
                      <span className="text-lg">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
