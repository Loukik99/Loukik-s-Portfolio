import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On desktop (>1024) the About reveal is choreographed by the character
    // scroll timeline (GsapScroll). Only add a self-contained reveal on
    // smaller screens, where that timeline doesn't run.
    if (window.innerWidth > 1024) return;
    const ctx = gsap.context(() => {
      gsap.from([".about-me .title", ".about-me .para"], {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 78%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
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
