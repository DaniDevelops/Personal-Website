import { title } from "process";

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "services",
    route: "/services",
  },
  {
    label: "resume",
    route: "/resume",
  },
  {
    label: "projects",
    route: "/projects",
  },
  {
    label: "about",
    route: "/about",
  },
];

export const stats = [
  {
    num: 2,
    label: "Years Of Experirnce",
  },
  {
    num: 8,
    label: "Projects completed",
  },
  {
    num: 8,
    label: "Technologies mastered",
  },
];

export const services = [
  {
    num: "01",
    type: "Website Development",
    link: "",
    description:
      "Bring your digital vision to life with expert website development. Work with me to craft pixel-perfect, engaging websites that captivate your audience and drive results. From sleek corporate sites to dynamic e-commerce platforms, I can turn your online vision into online reality",
  },
  {
    num: "02",
    type: "Responsive Design Integration",
    link: "",
    description:
      "One site, every device. With responsive design expertise to ensure your website looks and functions beautifully on all screens. From smartphones to wide-screen monitor, deliver seamless user experience across all devices",
  },
  {
    num: "03",
    type: "Performance Optimization",
    link: "",
    description:
      "Speed is King in the digital world. With Performance optimization services to turbocharge your website, delivering lighting-fast load times and buttery-smooth interactions. Watch your bounce rates plumment and conversions soar with a site that's built for speed",
  },
  {
    num: "04",
    type: "SEO Optimization",
    link: "",
    description:
      "Boost your SEO visibility, Rank Highly on Search Engines. As a web developer, I go beyond surface tweaks, fine-tuning your site's structure, speed, and code to charm search engines.",
  },
];

export const aboutMe = {
  title: "About Me",
  description:
    "I'm Daniel Nwafor, A Frontend Developer dedicated to blending stunning design with seamless functionality. From crafting pixel-perfect layouts to ensuring lightning-fast performance, I turn your ideas into engaging, user-friendly web experiences. Let&apos;s bring your vision to life with precision and creativity! ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Daniel Nwafor",
    },
    {
      fieldName: "Phone Number",
      fieldValue: "+2348103892567",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years Experience",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
    {
      fieldName: "Email",
      fieldValue: "DaniDev3lops@outlook.com",
    },
  ],
};

export const experience = {
  icon: "",
  title: "My Experience",
  description: "My experience working in web development",
  experience: [
    {
      company: "SkyHighCopy",
      role: "Freelance Developer",
      description:
        "Frontend developer incharge of building and maintaining a Website for a small marketing agency on wordpress using tools like nextjs and integrating wordpress's Headless CMS",
      duration: "March 2023 - June 2024",
    },
  ],
};

export const education = {
  icon: "",
  title: "My Education",
  description:
    "Honed skills and expanded knowledge through a diverse academic journey. Specialized courses in software engineering, demonstrating a commitment to continous learning and professional growth",
  education: [
    {
      degree: "B.Eng Electrical/Electronics Engineering",
      school: "Federal University Of Petroleum Resources",
      duration: "2013 - 2019",
    },
  ],
  skills: [
    {
      name: "Basic Web Development",
      school: "FreeCodeCamp/The Web Developer BootCamp",
    },
    {
      name: "Advanced React Development",
      school: "The Ultimate React Course - Udemy",
    },
    {
      name: "Use Of NextJs Framework",
      school: "The Ultimate NextJs-14 Course by Hamed Bahram",
    },
    {
      name: "Typescript",
      school: "TypeScript Simplified  by WebDevSimplified - Udemy",
    },
  ],

  certifications: [
    {
      cerficate: "Azure Administrator Associate",
      organistaion: "Microsoft",
    },
    {
      cerficate: "Micrisoft Azure Fundamentals",
      organistaion: "Microsoft",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Nike Landing Page",
    description:
      "Developed a sleek, responsive landing page for a Nike Product Launch. This project showcases clean modern design, responsive layout and performance optimization",
    tools: ["Html5", "Css", "javacript", "React", "TailwindCss"],
    image: "/Nike.png",
    liveWebsite: "https://nike-landing-page-jade-nine.vercel.app/",
    githubRepo: "https://github.com/DaniDevelops/Nike-Landing-Page.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Brainwave AI Landing",
    description:
      "Developed a sleek, responsive landing page for a Modern AI tool. This project showcases clean ultra-modern design, responsive layout and performance optimization",
    tools: ["Html5", "Css", "javacript", "React", "TailwindCss"],
    image: "/Brainwave.webp",
    liveWebsite: "https://brainwave-three-coral.vercel.app/",
    githubRepo: "https://github.com/DaniDevelops/Brainwave.git",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Horizon Finance App",
    description:
      "Developed a sleek, responsive fullstack fintech app with modern banking functionalities and ultra modern design",
    tools: [
      "Html5",
      "Css",
      "javacript",
      "React",
      "NextJs",
      "Appwrite",
      "Plaid",
      "Dwolla",
    ],
    image: "/Horizon.png",
    liveWebsite: "https://horizon-bank-app.vercel.app/",
    githubRepo: "https://github.com/DaniDevelops/Horizon.git",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Threads Clone App",
    description:
      "Developed a sleek, responsive fullstack threads social media app clone with account creation, communities creation, and comment  functionalities as well an ultra robust user management and authentication system using clerk",
    tools: [
      "Html5",
      "Css",
      "javacript",
      "React",
      "NextJs",
      "Clerkjs",
      "MongoDb",
    ],
    image: "/Threads.png",
    liveWebsite: "https://threads-rho-azure.vercel.app/",
    githubRepo: "https://github.com/DaniDevelops/Threads.git",
  },
  {
    num: "05",
    category: "fullstack",
    title: "Hotel Booking App",
    description:
      "Developed a sleek, responsive fullstack hotel booking equiped with search functionalities, hotel booking, hotel addition and hotel booking payment with stripe",
    tools: [
      "Html5",
      "Css",
      "javacript",
      "React",
      "NodeJs",
      "ExpressJs",
      "Stripe",
      "MongoDb",
    ],
    image: "/Booking.png",
    liveWebsite: "https://mern-booking-app-diye.onrender.com",
    githubRepo: "https://github.com/DaniDevelops/mern-booking-app.git",
  },
  {
    num: "06",
    category: "frontend",
    title: "Iphone 15 Landing Page",
    description:
      "Developed a sleek, responsive landing page for the iPhone 15 with animations and 3D rendering using GSAP and Threejs respectively",
    tools: ["Html5", "Css", "javacript", "React", "ThreeJs", "GSAP"],
    image: "/Iphone15.png",
    liveWebsite: "https://i-phone-15-landing-page.vercel.app/",
    githubRepo: "https://github.com/DaniDevelops/iPhone-15-landing-page.git",
  },
];
