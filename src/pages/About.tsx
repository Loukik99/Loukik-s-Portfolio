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

const skillGroups = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT", "OAuth"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Tools & Cloud",
    items: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Jira"],
  },
];

const timeline = [
  {
    badge: "NOW",
    role: "Software Engineer (Full Stack)",
    org: "SDK Infotech Pvt Ltd · Pune",
    desc: "Architecting and shipping production-grade full-stack applications with React, Next.js, Node.js and PostgreSQL. Designing REST APIs, real-time features and Redis caching, and mentoring junior developers.",
  },
  {
    badge: "MCA",
    role: "Master of Computer Applications",
    org: "Jain University · Bangalore",
    desc: "Deepened my foundation in system design, data structures and scalable software engineering.",
  },
  {
    badge: "BCA",
    role: "Bachelor of Computer Applications",
    org: "Rani Channamma University · Belagavi",
    desc: "Built my core skills in programming, databases and web fundamentals.",
  },
];

const achievements = [
  "Cut API response times from 320ms to under 180ms with Redis caching and query optimisation.",
  "Handled 500+ concurrent WebSocket connections with Socket.io and Redis Pub/Sub.",
  "Reduced complex report generation from 12s to under 2s through indexing and aggregation.",
  "Mentored 3 junior developers on API design, Git workflows and production debugging.",
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
            I'm Loukik Kokate, a full-stack software engineer based in Pune with
            over 1.8 years of experience building production-grade web
            applications. I love turning complex problems into clean, reliable
            software.
          </p>
          <p>
            At SDK Infotech I architect and ship full-stack products with React,
            Next.js, Node.js and PostgreSQL, designing high-throughput APIs,
            real-time systems and caching layers that stay fast under load. As a
            freelancer, I partner with clients and teams to design and build
            modern, scalable web experiences end to end.
          </p>
          <p>
            I care about performance, clean architecture and great developer
            experience, and I enjoy mentoring other developers along the way.
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
