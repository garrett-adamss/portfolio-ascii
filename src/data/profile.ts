import { githubStats } from "./githubStats.generated";

export interface InfoField {
  label: string;
  value: string;
  href?: string;
  muted?: boolean;
  html?: boolean;
  additions?: string;
  deletions?: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  url: string;
  bullets: string[];
}

function formatTenure(startDate: Date): string {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return parts.join(", ") || "0 months";
}

const careerStart = new Date(2022, 7, 1); // August 2022

export const profile = {
  username: "richard.garrett@adams",
  title: "Garrett Adams",

  systemInfo: [
    { label: "Role", value: "Full-Stack Software Engineer" },
    { label: "Uptime", value: formatTenure(careerStart) },
    { label: "Org", value: "Prometric" },
    { label: "Focus", value: "System design → production ownership" },
    {
      label: "Impact",
      value: "30% fewer errors · 80% faster · $90K+ saved",
    },
  ] satisfies InfoField[],

  languages: [
    {
      label: "Languages",
      value: "C#, TypeScript, Python, JavaScript",
    },
    {
      label: "Frameworks",
      value: ".NET, React, Next.js, Vue, Django, Astro, Node",
    },
    {
      label: "Cloud",
      value: "AWS, Cloudflare, Postgres, MySQL, MongoDB, CI/CD",
    },
  ] satisfies InfoField[],

  contact: [
    {
      label: "Email",
      value: "garrettadamsdev@gmail.com",
      href: "mailto:garrettadamsdev@gmail.com",
    },
    {
      label: "Website",
      value: "garrettadamss.com",
      href: "https://garrettadamss.com",
    },
    {
      label: "GitHub",
      value: "github.com/garrett-adamss",
      href: "https://github.com/garrett-adamss",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/garrett-adamss",
      href: "https://linkedin.com/in/garrett-adamss",
    },
  ] satisfies InfoField[],

  githubStats,

  experience: [
    {
      title: "Software Engineer",
      company: "Prometric",
      dates: "Dec 2024 – Present",
      bullets: [
        "Owned production deployments across all 3 company products; redesigned rostering architecture, cutting errors by 30%.",
        "Resolved 100+ customer issues with QA, improving CSAT by 40% and reducing churn 15%.",
        "Mentored 2 junior engineers, cutting new-hire ramp-up time by 2 weeks.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Jenn AI",
      dates: "Dec 2023 – Oct 2024",
      bullets: [
        "Built AI-driven sales consultants driving 10.1% revenue increase across the client base.",
        "Led Shopify integration architecture, cutting new-client launch time by 150%.",
        "Reduced hosting costs by $250/day through optimization, saving $90K/year annualized.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Renovation Lending Software",
      dates: "Jan 2023 – Nov 2023",
      bullets: [
        "Optimized SQL query performance, cutting load times by 80% (35s → 6s).",
        "Refactored legacy codebases under senior guidance, improving maintainability.",
      ],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      name: "Byteflow",
      url: "https://byteflow.solutions",
      bullets: [
        "Multi-tenant deployment pipeline with Astro, Cloudflare Workers, and R2 for per-client site deployments.",
        "Internal SDK abstracting auth, rate-limiting, and write-protection, saving 3–5 hours per client integration.",
      ],
    },
    {
      name: "Save Space",
      url: "https://savespace.io",
      bullets: [
        "Full-stack photo-sharing platform (Next.js, Supabase, AWS S3, Stripe) with magic-link auth.",
        "Collaborative album creation and sharing for ~100 beta testers.",
      ],
    },
  ] satisfies ProjectEntry[],
};
