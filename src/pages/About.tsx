import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Freelancer",
  "Problem Solver",
];

const stats = [
  { value: "1.8+", label: "Years of experience" },
  { value: "40%", label: "Lower database load" },
  { value: "500+", label: "Concurrent connections" },
  { value: "35%", label: "Smaller bundle size" },
];

// Kept in sync with the home Tech Stack section (TechStack.tsx).
const skillGroups = [
  {
    name: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Context API",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "Chrome DevTools"],
  },
  {
    name: "AI",
    items: ["ChatGPT", "Claude", "GitHub Copilot"],
  },
];

const timeline = [
  {
    badge: "NOW",
    role: "Freelance Full-Stack Developer",
    org: "Self-employed · Pune",
    desc: "Partnering with clients and teams to design, build and ship modern, scalable web applications end to end with React, Next.js, Node.js and PostgreSQL.",
  },
  {
    badge: "MCA",
    role: "Master of Computer Applications",
    org: "Jain University · Bengaluru · 2023-2025",
    desc: "Deepened my foundation in system design, data structures and scalable software engineering.",
  },
  {
    badge: "BCA",
    role: "Bachelor of Computer Applications",
    org: "Govindram Science College · Belgaum · 2019-2022",
    desc: "Built my core skills in programming, databases and web fundamentals.",
  },
];

const achievements = [
  "Cut API response times from 320ms to under 180ms with in-memory caching and query optimisation.",
  "Handled 500+ concurrent WebSocket connections with Socket.io for real-time features.",
  "Reduced complex report generation from 12s to under 2s through indexing and aggregation.",
  "Mentored developers on API design, Git workflows and production debugging.",
];

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".ab-hero > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });
      gsap.utils.toArray<HTMLElement>(".ab-reveal").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      {/* Hero / story */}
      <section className="ab-hero">
        <span className="ab-eyebrow">Who I am</span>
        <h1>ABOUT</h1>
        <div className="ab-roles">
          {roles.map((r) => (
            <span className="ab-role" key={r}>
              {r}
            </span>
          ))}
        </div>
        <div className="ab-story">
          <p>
            Motivated Full Stack Developer with freelance experience delivering
            responsive, production-ready web applications and business websites
            for clients across consultancy, event management, and corporate
            domains.
          </p>
          <p>
            Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, SQL,
            JavaScript, and REST API development, with a strong foundation in
            building scalable, user-centric applications. Passionate about
            developing clean, maintainable code, solving real-world problems,
            and continuously learning modern technologies to create high-quality
            software solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="ab-stats ab-reveal">
        {stats.map((s) => (
          <div className="ab-stat" key={s.label}>
            <span className="ab-stat-value">{s.value}</span>
            <span className="ab-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="ab-section">
        <h2 className="ab-reveal">Skills</h2>
        <div className="ab-skills">
          {skillGroups.map((g) => (
            <div className="ab-skill-group ab-reveal" key={g.name}>
              <h4>{g.name}</h4>
              <div className="ab-tags">
                {g.items.map((it) => (
                  <span className="ab-tag" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="ab-section">
        <h2 className="ab-reveal">Experience &amp; Education</h2>
        <div className="ab-timeline">
          {timeline.map((t) => (
            <div className="ab-tl-item ab-reveal" key={t.role}>
              <div className="ab-tl-marker">
                <span className="ab-tl-dot"></span>
              </div>
              <div className="ab-tl-content">
                <div className="ab-tl-top">
                  <div>
                    <h3>{t.role}</h3>
                    <span className="ab-tl-org">{t.org}</span>
                  </div>
                  <span className="ab-tl-badge">{t.badge}</span>
                </div>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="ab-section">
        <h2 className="ab-reveal">Achievements</h2>
        <ul className="ab-achievements">
          {achievements.map((a) => (
            <li className="ab-reveal" key={a}>
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="ab-cta ab-reveal">
        <h2>Let's work together</h2>
        <p>Have a role or a project in mind? I'd love to hear about it.</p>
        <Link className="ab-btn" to="/contact" data-cursor="disable">
          Get in touch <MdArrowOutward />
        </Link>
      </section>
    </div>
  );
};

export default About;
