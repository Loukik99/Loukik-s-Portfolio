import { CSSProperties, MouseEvent, useRef } from "react";
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiVercel,
  SiGooglechrome,
  SiOpenai,
  SiGithubcopilot,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";
import "./styles/TechStack.css";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}
interface Category {
  name: string;
  items: Tech[];
}

const categories: Category[] = [
  {
    name: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Context API", icon: SiReact, color: "#61dafb" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", icon: TbApi, color: "#5eead4" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285f4" },
    ],
  },
  {
    name: "AI",
    items: [
      { name: "ChatGPT", icon: SiOpenai, color: "#ffffff" },
      { name: "Claude", icon: FaRobot, color: "#d97757" },
      { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#ffffff" },
    ],
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Global mouse parallax: chips drift by their depth factor.
  const handleParallax = (e: MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
  };
  const resetParallax = () => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  // Magnetic pull toward the cursor on a single chip.
  const handleMagnet = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.setProperty("--tx", `${(x * 0.3).toFixed(1)}px`);
    el.style.setProperty("--ty", `${(y * 0.3).toFixed(1)}px`);
  };
  const resetMagnet = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--tx", "0px");
    e.currentTarget.style.setProperty("--ty", "0px");
  };

  let globalIndex = 0;

  return (
    <section
      className="tech-stack-section"
      id="techstack"
      ref={sectionRef}
      onMouseMove={handleParallax}
      onMouseLeave={resetParallax}
    >
      <div className="tech-stack-inner section-container">
        <h2 className="tech-stack-title">
          My <span>Tech Stack</span>
        </h2>
        <p className="tech-stack-sub">
          The tools I reach for to design, build and ship products end to end.
        </p>

        {categories.map((cat) => (
          <div className="tech-cat" key={cat.name}>
            <h3 className="tech-cat-label">{cat.name}</h3>
            <div className="tech-cat-chips">
              {cat.items.map((tech) => {
                const i = globalIndex++;
                const depth = 6 + (i % 3) * 4;
                const chipStyle = {
                  "--depth": depth,
                } as CSSProperties;
                const floatStyle = {
                  animationDelay: `${(i % 5) * 0.4}s`,
                  animationDuration: `${5 + (i % 4)}s`,
                } as CSSProperties;
                const btnStyle = { "--glow": tech.color } as CSSProperties;
                const Icon = tech.icon;
                return (
                  <div
                    className="tech-chip"
                    key={tech.name}
                    style={chipStyle}
                  >
                    <div className="tech-chip-float" style={floatStyle}>
                      <div
                        className="tech-chip-btn"
                        style={btnStyle}
                        onMouseMove={handleMagnet}
                        onMouseLeave={resetMagnet}
                      >
                        <span className="tech-chip-icon">
                          <Icon />
                        </span>
                        <span className="tech-chip-name">{tech.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
