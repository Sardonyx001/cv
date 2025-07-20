import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jamel Eddine Lassoued",
  initials: "LJ",
  location: "Tokyo, Japan",
  about: "Aspiring Full Stack Engineer. Currently working in Tokyo.",
  summary:
    "I have experience in building and maintaining web applications using Node.js, TypeScript, Flask, and PostgreSQL. I am passionate about building products that are scalable, maintainable, and accessible. I am also interested in learning more about DevOps and MLOps.",
  avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${Math.random()}`,
  personalWebsiteUrl: "https://sardonyx001.github.io/",
  contact: {
    email: "lassouedjamel99+cv@gmail.com",
    tel: "+8107091962885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sardonyx001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamel-eddine-lassoued-5a8768360/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/whyamihere001",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Oita University",
      link: "https://www.oita-u.ac.jp/",
      degree: "Bachelor's Degree in Computer Science and Intelligent Systems\n",
      start: "2023",
      end: "2025",
    },
    {
      school: "National Institute of Technology, Sasebo College",
      link: "https://www.sasebo.ac.jp/",
      degree: "Associate's Degree in Control systems engineering",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Sigma-i Co., Ltd",
      link: "https://www.sigmailab.com/",
      badges: ["Remote", "Python", "Flask", "MySQL", "Redis"],
      title: "Backend Developer",
      start: "2023/5",
      end: "2025/3",
      description:
        "I am working as a Backend Developer with Sigma-i, a startup based in Japan. I am responsible for building and maintaining the backend of one of the company's main products, a web application that helps users manage data entry and retrieval and generate reports.",
    },
    {
      company: "Yumemi Inc.",
      link: "https://www.yumemi.co.jp/",
      badges: ["Remote", "Golang", "DDD", "Echo", "PostgreSQL"],
      title: "Backend Developer",
      start: "2024/2",
      end: "2024/3",
      description:
        "Spent a two-week internship developing an API for a personal ordering system using the Golang Echo framework.",
    },
    {
      company: "MobileCreate",
      link: "https://www.mcinc.jp/",
      badges: ["Remote", "Typescript", "Next.js", "PostgreSQL"],
      title: "Full Stack Developer",
      start: "2023/11",
      end: "2024/3",
      description:
        "I am working as a Backend Developer with Sigma-i, a startup based in Japan. I am responsible for building and maintaining the backend of one of the company's main products, a web application that helps users manage data entry and retrieval and generate reports.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Golang",
    "JavaScript/TypeScript",
    "Flask",
    "FastAPI",
    "React/Next.js",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "Bash",
    "Perl",
    "C/C++",
  ],
  projects: [
    {
      title: "Project Title",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "Labore esse qui officia dolore et incididunt irure amet proident laboris proident Lorem.",
      link: {
        label: "example.com",
        href: "https://example.com/",
      },
    },
    {
      title: "Project Title 2",
      techStack: ["Python", "Flask", "MySQL", "Redis", "Celery"],
      description:
        "Duis dolor adipisicing et magna fugiat occaecat culpa eiusmod nulla.",
      link: {
        label: "example.com",
        href: "https://example.com/",
      },
    },
  ],
} as const;
