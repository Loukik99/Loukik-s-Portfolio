import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiLayout,
  FiLayers,
  FiCode,
  FiSmartphone,
  FiSearch,
  FiZap,
  FiLifeBuoy,
} from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { IconType } from "react-icons";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: FiLayout, label: "Modern UI" },
  { icon: FiSmartphone, label: "Responsive" },
  { icon: FiSearch, label: "SEO friendly" },
  { icon: FiZap, label: "Fast delivery" },
  { icon: FiCode, label: "Clean code" },
  { icon: FiLifeBuoy, label: "Ongoing support" },
];

interface Service {
  icon: IconType;
  title: string;
  description: string;
  process: string[];
  tech: string[];
}

const services: Service[] = [
  {
    icon: FiLayout,
    title: "Web Development",
    description:
      "I build fast, accessible and pixel-perfect websites and web apps that look great on every device and turn visitors into users.",
    process: ["Discover", "Design", "Build", "Launch"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: FiLayers,
    title: "Full Stack Development",
    description:
      "From API design to deployment, I develop scalable, secure full-stack applications with real-time features, authentication and caching that hold up under load.",
    process: ["Architect", "Develop", "Integrate", "Deploy"],
    tech: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Socket.io"],
  },
];

const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".sv-hero > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });
      gsap.utils.toArray<HTMLElement>(".sv-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="services-page" ref={pageRef}>
      <section className="sv-hero">
        <span className="sv-eyebrow">What I do</span>
        <h1>SERVICES</h1>
        <p>
          Focused, senior-level engineering to take your product from idea to a
          fast, reliable release.
        </p>
      </section>

      <div className="sv-features">
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <div className="sv-feature" key={h.label}>
              <Icon />
              <span>{h.label}</span>
            </div>
          );
        })}
      </div>

      <section className="sv-list">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <article className="sv-card" key={s.title}>
              <div className="sv-card-head">
                <span className="sv-num">0{i + 1}</span>
                <div className="sv-icon">
                  <Icon />
                </div>
                <h2>{s.title}</h2>
              </div>

              <p className="sv-desc">{s.description}</p>

              <div className="sv-cols">
                <div className="sv-block">
                  <h4>Process</h4>
                  <div className="sv-process">
                    {s.process.map((step, idx) => (
                      <div className="sv-step" key={step}>
                        <span className="sv-step-num">{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sv-block">
                  <h4>Technologies</h4>
                  <div className="sv-tags">
                    {s.tech.map((t) => (
                      <span className="sv-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link className="sv-btn" to="/contact" data-cursor="disable">
                Start a project <MdArrowOutward />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
