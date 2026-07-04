import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-inner section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Loukik Kokate</h2>
            <p>Software Engineer &amp; Freelancer</p>
          </div>

          <div className="footer-contact">
            <a
              className="footer-link"
              href="mailto:loukikkokate87@gmail.com"
              data-cursor="disable"
            >
              <FiMail style={{ color: "#ea4335" }} />
              <span>loukikkokate87@gmail.com</span>
            </a>
            <a
              className="footer-link"
              href="tel:+919096819628"
              data-cursor="disable"
            >
              <FiPhone style={{ color: "#34d399" }} />
              <span>+91 90968 19628</span>
            </a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Loukik99"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor="disable"
            >
              <FiGithub style={{ color: "#ffffff" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/loukik-kokate-4b4462230/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor="disable"
            >
              <FiLinkedin style={{ color: "#0a66c2" }} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            <MdCopyright /> 2026 Loukik Kokate. All rights reserved.
          </span>
          <span className="footer-credit">
            Designed &amp; built by <span>Loukik Kokate</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
