import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ismayil Mammadli",
  initials: "IM",
  location: "Moscow, Ankara, Baku",
  locationLink: "https://www.google.com/maps/place/Moscow",
  about:
    "Detail-oriented DevOps Engineer dedicated to building high-quality products.",
  summary:
    "As a DevOps Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/ismayil-mammadli-9a14a4b9/",
  contact: {
    email: "essesn23@gmail.com",
    tel: "+79257917346",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ismayilmm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ismayil-mammadli-9a14a4b9/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Bilkent University",
      degree: "Computer Technologies and Information Systems B.Sc",
      start: "2016",
      end: "2021",
    },
    {
      school: "Kharkiv State University",
      degree: "Economics MSc",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Sberbank",
      link: "https://sberbank.ru",
      title: "DevMLOps",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Building CI/CD process for ML services / Groovy script for enhancing automation processes / Multi-Prod deployment (Cloud, self-hosted Openshift and Hadoop)",
    },
    {
      company: "Sberbank",
      link: "https://sberbank.ru",
      title: "DevOps Team Lead",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "Led a team of DevOps engineers in implementing CI/CD pipelines and automation \n• Implemented monitoring and logging solutions to improve system performance\n• Conducted team performance reviews and mentoring\n• Transitioned from VPS to OpenShift\n• Trained employees on OpenShift and Kubernetes\n• Wrote automation scripts",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Developed and tested software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
} as const;
