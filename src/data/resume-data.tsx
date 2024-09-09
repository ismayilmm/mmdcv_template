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
  location: "Moscow, Russia",
  locationLink: "https://www.google.com/maps/place/Moscow",
  about: "DevOps Team Lead with extensive experience in automation, CI/CD, monitoring, and technical leadership.",
  summary:
    "As a DevOps Team Lead, I have led cross-functional teams in implementing CI/CD pipelines, system automation, and monitoring solutions. With a strong background in scripting, networking, and cloud infrastructure, I have driven significant improvements in system performance and team productivity. I am fluent in multiple programming languages and possess deep expertise in system administration and DevOps practices.",
  avatarUrl: "", // (no URL provided)
  personalWebsiteUrl: "https://www.linkedin.com/in/mammadli-9a14a4b9/",
  contact: {
    email: "essesn23@gmail.com",
    tel: "+79257917346",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mammadli-9a14a4b9/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Moscow State University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2021",
      achievements: ["Best Intern 2021 reward"],
    },
  ],
  work: [
    {
    company: "DFV OPS",
    title: "DevOps Team Lead",
    start: "July 2022",
    end: "Present",
    description:
      "• Led a team of DevOps engineers in implementing CI/CD pipelines and automation\n• Implemented monitoring and logging solutions to improve system performance\n• Conducted team performance reviews and mentoring\n• Transitioned from VPS to OpenShift\n• Trained employees on OpenShift and Kubernetes\n• Wrote automation scripts",
    link: "https://dfvops.com"  // Add this
  },
    {
      company: "Sberbank",
      title: "DevOps Engineer",
      start: "March 2022",
      end: "July 2022",
      description:
        "• Administered CI/CD pipelines from development to production\n• Enhanced technical and business monitoring processes\n• Developed a self-hosted monitoring system",
    },
    {
      company: "Fintech Company",
      title: "System Administrator/DevOps Engineer",
      start: "September 2020",
      end: "March 2022",
      description:
        "• Handled system audits, fintech client systems administration\n• Developed process automation scripts in Python\n• POS terminal software development\n• Monitoring",
    },
    {
      company: "Azercosmos OJSC",
      title: "Web Developer",
      start: "May 2020",
      end: "August 2020",
      description: "• Developed CRM platform back-end",
    },
    {
      company: "Gauss Statistical Solutions",
      title: "Web Developer",
      start: "June 2019",
      end: "August 2019",
      description: "• Translated old Angular.JS code to Vue.JS 2\n• System administration and updates",
    },
  ],
  skills: [
    "Team management",
    "Agile methodologies",
    "Technical leadership",
    "Mentoring",
    "Linux",
    "Python",
    "Bash",
    "Docker",
    "Nginx",
    "Zabbix",
    "AWS",
    "Jenkins",
    "Atlassian Jira",
    "Redis",
    "ELK",
    "Prometheus",
    "HTTP",
    "Oracle",
    "Nagios",
    "CI/CD",
    "Monitoring",
    "Automation",
    "Security",
    "Networking",
    "Scripting",
  ],
  languages: [
    { language: "Azerbaijani", proficiency: "Native" },
    { language: "English", proficiency: "Advanced (IELTS 7.5)" },
    { language: "Russian", proficiency: "Native" },
    { language: "Turkish", proficiency: "Native" },
    { language: "Spanish", proficiency: "Elementary" },
  ],
} as const;
