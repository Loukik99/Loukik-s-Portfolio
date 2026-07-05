import { useEffect, useRef } from "react";
import "./styles/About.css";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On desktop (>1024) the About reveal is choreographed by the character
    // scroll timeline (GsapScroll). Only add a self-contained reveal on
    // smaller screens, where that timeline doesn't run.
    if (window.innerWidth > 1024) return;
    const section = sectionRef.current;
    if (!section) return;
    const targets = Array.from(
      section.querySelectorAll<HTMLElement>(".title, .para")
    );

    // Arm the hidden state via a class (default markup stays visible, so the
    // text can never get stuck hidden if JS fails). The reveal is pure CSS,
    // triggered by adding a class — this is set with a timer/observer rather
    // than a gsap tween, so it applies reliably even if rAF is throttled.
    targets.forEach((t) => t.classList.add("about-hidden"));
    const show = () => targets.forEach((t) => t.classList.add("about-show"));

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(section);

    // Safety net: reveal no matter what after a short delay.
    const fallback = window.setTimeout(show, 1800);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Motivated <span className="about-hl">Full Stack Developer</span> with{" "}
          <span className="about-hl">freelance experience</span> delivering
          responsive, production-ready web applications and business websites
          for clients across consultancy, event management, and corporate
          domains. Skilled in React.js, Next.js, Node.js, Express.js, MongoDB,
          SQL, JavaScript, and REST API development, with a strong foundation in
          building <span className="about-hl">scalable, user-centric applications</span>.
          Passionate about developing{" "}
          <span className="about-hl">clean, maintainable code</span>, solving
          real-world problems, and continuously learning modern technologies to
          create high-quality software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
