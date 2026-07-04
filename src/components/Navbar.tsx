import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiBriefcase, FiFolder, FiUser, FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import "./styles/Navbar.css";

// The center circle shows an icon for the current page (Reference-1 behaviour).
const pageIcons: Record<string, IconType> = {
  "/": FiHome,
  "/projects": FiBriefcase,
  "/services": FiFolder,
  "/about": FiUser,
  "/contact": FiMail,
};

const centerLeft = { label: "Projects", to: "/projects" };
const centerRight = { label: "Services", to: "/services" };
const rightItems = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
const mobileItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-active" : "";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname } = useLocation();
  const PageIcon = pageIcons[pathname] ?? FiHome;

  return (
    <>
      <nav className="header">
        {/* Left corner */}
        <NavLink
          to="/"
          className="navbar-title"
          data-cursor="disable"
          reloadDocument
          onClick={close}
        >
          LK
        </NavLink>

        {/* Center: Projects · (animated Home circle) · Services */}
        <div className="nav-center">
          <NavLink to="/projects" data-cursor="disable" className={linkClass}>
            {centerLeft.label}
          </NavLink>

          <NavLink
            to="/"
            end
            data-cursor="disable"
            reloadDocument
            className={({ isActive }) =>
              `nav-home ${isActive ? "nav-home-active" : ""}`
            }
          >
            <svg className="nav-home-dots" viewBox="0 0 100 100" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="0.1 12"
                strokeLinecap="round"
              />
            </svg>
            <span className="nav-home-icon">
              <PageIcon />
            </span>
            <span className="nav-home-label">Home</span>
          </NavLink>

          <NavLink to="/services" data-cursor="disable" className={linkClass}>
            {centerRight.label}
          </NavLink>
        </div>

        {/* Right corner */}
        <ul className="nav-right">
          {rightItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} data-cursor="disable" className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          data-cursor="disable"
        >
          <span></span>
          <span></span>
        </button>

        {/* Mobile dropdown */}
        <ul className={`nav-mobile ${open ? "nav-menu-open" : ""}`}>
          {mobileItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                data-cursor="disable"
                reloadDocument={item.to === "/"}
                onClick={close}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
