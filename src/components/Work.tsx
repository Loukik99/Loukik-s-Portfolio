import { MouseEvent } from "react";
import "./styles/Work.css";
import { FiGithub } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  liveLabel?: string;
  github?: string;
  image: string;
  gradient: string;
  status?: string;
}

const clients: Project[] = [
  {
    title: "Mahabharat",
    description:
      "A responsive business website delivering a fast, modern and mobile-first web presence for the client.",
    tech: ["React", "Responsive", "SEO"],
    live: "https://www.mahabharat.net.in/",
    liveLabel: "Project is Live",
    image: "/images/mb-preview.png",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #6b2d0a 100%)",
  },
  {
    title: "Team Designated",
    description:
      "A client website currently in active development, built with a clean, responsive front-end.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://loukik99.github.io/Team-Designated/",
    github: "https://github.com/Loukik99/Team-Designated",
    image: "/images/td-preview.png",
    gradient: "linear-gradient(135deg, #6366f1 0%, #1e1b4b 100%)",
    status: "Building",
  },
  {
    title: "BDK Kangralkar & Sons",
    description:
      "A business website for BDK Kangralkar & Sons, currently being built with a mobile-first, performance-focused approach.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    live: "https://loukik99.github.io/BDK_Kangralkar-Sons/",
    github: "https://github.com/Loukik99/BDK_Kangralkar-Sons",
    image: "/images/bdk-preview.png",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #2e1065 100%)",
    status: "Building",
  },
];

const projects: Project[] = [
  {
    title: "F1 Analytics Dashboard",
    description:
      "A Formula 1 analytics dashboard that visualises race data, driver standings and season insights through interactive, filterable charts.",
    tech: ["React", "Next.js", "Data Viz", "REST APIs"],
    live: "https://f1-analytics-phor7pqih-loukik-kokates-projects.vercel.app/",
    github: "https://github.com/Loukik99",
    image: "/images/f1-preview.png",
    gradient: "linear-gradient(135deg, #e10600 0%, #2b0a0a 100%)",
  },
  {
    title: "Adaptus Dashboard",
    description:
      "An admin dashboard application with a clean, data-dense interface for managing operations, users and analytics in one place.",
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    live: "https://adaptus-project.vercel.app/dashboard",
    github: "https://github.com/Loukik99",
    image: "/images/ad-preview.png",
    gradient: "linear-gradient(135deg, #5eead4 0%, #0f5d55 100%)",
  },
];

const Work = () => {
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 5).toFixed(2)}deg`);
  };

  const handleLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  const renderCard = (p: Project) => (
    <article
      className="work-card"
      key={p.title}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <a
        className="work-card-media"
        href={p.live}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
        style={{ backgroundImage: p.gradient }}
        aria-label={`Open ${p.title} live demo`}
      >
        <img
          className="work-card-img"
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
        />
        {p.status && <span className="work-card-status">{p.status}</span>}
        <span className="work-card-open">
          <MdArrowOutward />
        </span>
      </a>

      <div className="work-card-body">
        <h3>{p.title}</h3>
        <p>{p.description}</p>

        <div className="work-card-tags">
          {p.tech.map((t) => (
            <span className="work-tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="work-card-actions">
          {p.live && (
            <a
              className="work-btn work-btn-primary"
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
              className="work-btn work-btn-ghost"
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
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Work</span>
        </h2>
        <p className="work-subtitle">
          A selection of products, dashboards and client sites I have designed
          and built.
        </p>

        <div className="work-group">
          <h3 className="work-group-label">Clients</h3>
          <div className="work-grid">{clients.map(renderCard)}</div>
        </div>

        <div className="work-group">
          <h3 className="work-group-label">Projects</h3>
          <div className="work-grid">{projects.map(renderCard)}</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
