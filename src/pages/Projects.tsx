import { useEffect, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGithub,
  FiCode,
  FiSmartphone,
  FiZap,
  FiLayout,
  FiShield,
} from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: FiCode, label: "Clean, tested code" },
  { icon: FiLayout, label: "Modern UI" },
  { icon: FiSmartphone, label: "Fully responsive" },
  { icon: FiZap, label: "Fast delivery" },
  { icon: FiShield, label: "Reliable partner" },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  liveLabel?: string;
  github?: string;
  image: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Mahabharat",
    description:
      "A responsive business website delivering a fast, modern and mobile-first web presence for the client.",
    tech: ["React", "Responsive", "SEO"],
    live: "https://www.mahabharat.net.in/",
    liveLabel: "Project is Live",
    image: "/images/mb-preview.png",
  },
  {
    title: "Team Designated",
    description:
      "A client website in active development, built with a clean, responsive front-end foundation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://loukik99.github.io/Team-Designated/",
    github: "https://github.com/Loukik99/Team-Designated",
    image: "/images/td-preview.png",
    status: "Building",
  },
  {
    title: "BDK Kangralkar & Sons",
    description:
      "A business website for BDK Kangralkar & Sons, built with a mobile-first, performance-focused approach.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    live: "https://loukik99.github.io/BDK_Kangralkar-Sons/",
    github: "https://github.com/Loukik99/BDK_Kangralkar-Sons",
    image: "/images/bdk-preview.png",
    status: "Building",
  },
  {
    title: "F1 Analytics Dashboard",
    description:
      "A Formula 1 analytics dashboard that turns raw race data into interactive standings, driver stats and season insights.",
    tech: ["React", "Next.js", "Data Viz", "REST APIs"],
    live: "https://f1-analytics-phor7pqih-loukik-kokates-projects.vercel.app/",
    github: "https://github.com/Loukik99",
    image: "/images/f1-preview.png",
  },
  {
    title: "Adaptus Dashboard",
    description:
      "An admin dashboard with a clean, data-dense interface for managing operations, users and analytics in one place.",
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    live: "https://adaptus-project.vercel.app/dashboard",
    github: "https://github.com/Loukik99",
    image: "/images/ad-preview.png",
  },
];

const Projects = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".pg-hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });
      gsap.from(".pg-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".pg-projects",
          start: "top 78%",
        },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
  };
  const handleLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="projects-page" ref={pageRef}>
      <section className="pg-hero">
        <div className="pg-hero-text">
          <span className="pg-eyebrow">Selected work</span>
          <h1>PROJECTS</h1>
          <p>
            A collection of products, dashboards and client websites I have
            designed, built and shipped end to end.
          </p>
        </div>
      </section>

      <div className="pg-features">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div className="pg-feature" key={f.label}>
              <Icon />
              <span>{f.label}</span>
            </div>
          );
        })}
      </div>

      <section className="pg-projects">
        {projects.map((p) => (
          <article
            className="pg-card pg-reveal"
            key={p.title}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <a
              className="pg-card-media"
              href={p.live}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              aria-label={`Open ${p.title}`}
            >
              <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              {p.status && <span className="pg-card-status">{p.status}</span>}
            </a>
            <div className="pg-card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="pg-card-tags">
                {p.tech.map((t) => (
                  <span className="pg-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="pg-card-actions">
                {p.live && (
                  <a
                    className="pg-btn pg-btn-primary"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    {p.liveLabel || "Live Demo"} <MdArrowOutward />
                  </a>
                )}
                {p.github && (
                  <a
                    className="pg-btn pg-btn-ghost"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="pg-outro">
        <div className="pg-outro-text">
          <h2>Have a project in mind?</h2>
          <p>Let’s build something fast, reliable and worth remembering.</p>
          <Link className="pg-btn pg-btn-primary" to="/contact" data-cursor="disable">
            Start a conversation <MdArrowOutward />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
