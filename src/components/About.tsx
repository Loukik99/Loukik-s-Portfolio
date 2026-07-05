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
          I'm a <span className="about-hl">full-stack software engineer</span>{" "}
          who turns complex ideas into fast, reliable products. Over the last
          1.8+ years I've architected and shipped{" "}
          <span className="about-hl">production web applications</span> with
          React, Next.js, Node.js and PostgreSQL, engineering{" "}
          <span className="about-hl">high-throughput APIs</span> and{" "}
          <span className="about-hl">real-time systems</span> with caching
          layers that stay fast under load. As a{" "}
          <span className="about-hl">freelancer</span>, I partner with teams to
          design and build scalable, well-crafted software{" "}
          <span className="about-hl">end to end</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
