type ExperienceItem = {
  experienceNo: string;
  year: string;
  company: string;
  role: string;
  companySite?: string;
  imgSrc: string;
  location?: string;
  contentLang: string[];
  details?: string;
};

export const ExperienceData: ExperienceItem[] = [
  {
    experienceNo: "E/01",
    year: "2024",
    company: "NAVER Corporation",
    role: "Full Stack Developer",
    companySite: "https://www.naver.com/",
    imgSrc: "/images/naver.png",
    location: "Seoul, South Korea",
    contentLang: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Node.js",
      "PHP (Symfony)",
      "PostgreSQL",
      "REST APIs",
      "OAuth2 & JWT",
      "RBAC",
      "Docker",
      "Jira",
    ],
    details: `Developed scalable, high-traffic apps with optimized search and content delivery (+30% performance). 
    Built SEO-focused Next.js UIs and integrated GraphQL APIs for seamless data flow across services.`,
  },
  {
    experienceNo: "E/02",
    year: "2021–2023",
    company: "Placewise Group",
    role: "Full Stack Developer",
    companySite: "https://www.placewise.com/",
    imgSrc: "/images/placewise.png",
    location: "Denver, USA",
    contentLang: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "PHP (Laravel)",
      "Docker & Kubernetes",
      "MySQL & PostgreSQL",
      "AWS",
      "Stripe",
      "Jest & Playwright",
      "Agile",
    ],
    details: `Built 15+ global e-commerce platforms with scalable architectures and optimized DB queries (+25% speed). 
    Set up CI/CD pipelines, performed code reviews, and delivered key sites like St. James Quarter.`,
  },
  {
    experienceNo: "E/03",
    year: "2020",
    company: "Ethix Incorporation",
    role: "Full Stack Developer",
    companySite: "https://www.ethix.com/",
    imgSrc: "/images/ethx.png",
    location: "San Francisco, USA",
    contentLang: [
      "Next.js (SSR & ISR)",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL (Apollo Client/Server)",
      "Node.js",
      "PHP (Laravel APIs)",
      "Microservices",
      "Redis & PostgreSQL",
      "Jest & Cypress",
      "AWS",
      "CI/CD",
    ],
    details: `Developed SaaS tools for financial compliance with secure auth, RBAC, and dashboards. 
    Improved API reliability and UI/UX, boosting user satisfaction by 20%.`,
  },
  {
    experienceNo: "E/04",
    year: "2019",
    company: "NAVER Corporation",
    role: "Full Stack Development Intern",
    companySite: "https://www.naver.com/",
    imgSrc: "/images/naver-intern.png",
    location: "Seoul, South Korea",
    contentLang: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Node.js",
      "PHP",
      "PostgreSQL",
      "Jest",
      "AWS S3",
      "Git & CI/CD",
    ],
    details: `Assisted in building and testing reusable UIs, debugging GraphQL APIs, and optimizing app performance. 
    Gained hands-on experience with CI/CD, automated testing, and collaborative development practices.`,
  },
];
