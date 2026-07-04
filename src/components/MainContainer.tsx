import { PropsWithChildren, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const isHome = useLocation().pathname === "/";

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {/* Character model is home-only; it renders here on desktop (fixed) and
          is passed into Landing on smaller screens. */}
      {isDesktopView && isHome && children}
      <Routes>
        <Route
          path="/"
          element={<Home isDesktopView={isDesktopView}>{children}</Home>}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
