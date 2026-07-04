import { lazy, PropsWithChildren, Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import WhatIDo from "../components/WhatIDo";
import Work from "../components/Work";
import { useLoading } from "../context/LoadingProvider";
import { setSmoother } from "../components/utils/smoothScroll";
import { initialFX } from "../components/utils/initialFX";

const TechStack = lazy(() => import("../components/TechStack"));

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

type HomeProps = PropsWithChildren<{ isDesktopView: boolean }>;

const Home = ({ children, isDesktopView }: HomeProps) => {
  const { isLoading } = useLoading();

  // Own the ScrollSmoother lifecycle here, since #smooth-wrapper lives on this
  // route. Recreated on every mount so navigating away and back keeps working.
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });
    setSmoother(smoother);
    smoother.scrollTop(0);
    // On the very first visit the entrance animation (initialFX) releases the
    // lock; on later remounts loading is done, so start unlocked.
    smoother.paused(isLoading);

    // Returning to home after the first load: the loading screen (which
    // normally fires the entrance setup) no longer runs, so replay it here.
    // This restores the landing text reveal + the cycling role words, which
    // otherwise overlap.
    if (!isLoading) {
      try {
        initialFX();
      } catch (err) {
        console.error("initialFX (remount) failed:", err);
      }
    }

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      smoother.kill();
      // Kill any lingering ScrollTriggers (character + section timelines) so a
      // later return to home rebuilds them cleanly instead of duplicating.
      ScrollTrigger.getAll().forEach((t) => t.kill());
      setSmoother(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="container-main">
          <Landing>{!isDesktopView && children}</Landing>
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <Suspense fallback={<div>Loading....</div>}>
            <TechStack />
          </Suspense>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
