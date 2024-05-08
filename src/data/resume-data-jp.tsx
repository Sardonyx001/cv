import { VercelLogo, NextJsLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "LASSOUED Jamel Eddine \nラスエド・ジャメル・エディン",
  initials: "LJ",
  location: "大分県",
  locationLink: "https://www.google.com/maps/place/Oita,+Japan/",
  about:
    "フルスタックエンジニアを目指している大分大学4年生。アルバイトでバックエンドエンジニアとして様々な会社で勤めている。",
  summary:
    "Node.js、Flask、PostgreSQL/MySQLを使ったWebアプリケーションの構築と保守の経験があります。スケーラブルで保守性が高く、使いやすいサービス・プロダクト開発に熱心があります。また、DevOpsとMLOpsについてもっと学びたいと思っています。TUIが好きで、最近GolangとRustを勉強中です。",
  avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${Math.random()}`,
  personalWebsiteUrl: "https://sardonyx001.github.io/",
  contact: {
    email: "lassouedjamel99+cv@gmail.com",
    schoolEmail: "2158269+cv@oita-u.ac.jp",
    tel: "+8107091962885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sardonyx001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamel-lassoued/",
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
      school: "大分大学",
      link: "https://www.oita-u.ac.jp/",
      degree: "理工学科知能情報システムコース\n",
      start: "2023/4",
      end: "2025/3",
    },
    {
      school: "佐世保工業高等専門学校",
      link: "https://www.sasebo.ac.jp/",
      degree: "電子制御工学科",
      start: "2020/4",
      end: "2023/3",
    },
  ],
  work: [
    {
      company: "Sigma-i株式会社",
      link: "https://www.sigmailab.com/",
      badges: ["リモート", "Python", "Flask", "MySQL", "Redis"],
      title: "バックエンド開発",
      logo: NextJsLogo,
      start: "2023",
      end: "現在",
      description:
        "主にFlask Webアプリのバックエンド開発＋ Jsのフロントエンド開発。Github ActionsによるCI/CDの構築。生成AIデモの開発とデプロイ。",
    },
    {
      company: "ゆめみ株式会社",
      link: "https://www.sigmailab.com/",
      badges: ["リモート", "Python", "Flask", "MySQL", "Redis"],
      title: "バックエンド開発",
      logo: NextJsLogo,
      start: "2024/2",
      end: "2024/3",
      description:
        "2週間のインターンに通じてGolangのEchoフレームワークを利用した個人注文システムのAPIを開発。",
    },
    {
      company: "MobileCreate株式会社",
      link: "https://www.mcinc.jp/",
      badges: ["リモート", "Typescript", "Next.js", "PostgreSQL"],
      title: "フルスタック開発",
      logo: NextJsLogo,
      start: "2023/11",
      end: "2024/3",
      description:
        "4ヶ月間のインターンを通じてバスのリアルタイム位置データ（GTFS-RT）を利用するルート検索・LINEを介する通知機能を持つWebアプリの開発。主にバックエンドとインフラを担当。",
    },
  ],
  skills: [
    "Python",
    "Flask",
    "Django",
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Docker",
    "Golang",
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
      logo: NextJsLogo,
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
      logo: VercelLogo,
      link: {
        label: "example.com",
        href: "https://example.com/",
      },
    },
  ],
} as const;
