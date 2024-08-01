import Photo from "@/components/my-components/Photo";
import Socials from "@/components/my-components/Socials";
import Stats from "@/components/my-components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FrontEnd Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Daniel Nwafor</span>
            </h1>
            <p className="mb-9 text-white/80 max-w-[500px] text-xs xl:text-sm">
              <span className="mb-6 inline-flex xl:whitespace-nowrap">
                🚀 Elevating Digital Experiences with Expert Frontend
                Development! 🚀
              </span>{" "}
              A Frontend Developer dedicated to blending stunning design with
              seamless functionality. From crafting pixel-perfect layouts to
              ensuring lightning-fast performance, I turn your ideas into
              engaging, user-friendly web experiences. Let&apos;s bring your
              vision to life with precision and creativity! 🌟
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6 flex-wrap"
                  iconStyles="w-9 h-9 flex rounded-full border border-accent justify-center items-center text-accent hover:bg-accent text-base hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
