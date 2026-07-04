import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { IconType } from "react-icons";
import "./Contact.css";

// Free key from https://web3forms.com (enter loukikkokate87@gmail.com).
// Submissions are delivered straight to that inbox.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

interface Channel {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  color: string;
  external?: boolean;
}

const channels: Channel[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "loukikkokate87@gmail.com",
    href: "mailto:loukikkokate87@gmail.com",
    color: "#ea4335",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 90968 19628",
    href: "tel:+919096819628",
    color: "#34d399",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Loukik99",
    href: "https://github.com/Loukik99",
    color: "#ffffff",
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "loukik-kokate",
    href: "https://www.linkedin.com/in/loukik-kokate-4b4462230/",
    color: "#0a66c2",
    external: true,
  },
];

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".ct-hero > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      });
      gsap.from(".ct-anim", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page" ref={pageRef}>
      <section className="ct-hero">
        <span className="ct-eyebrow">Get in touch</span>
        <h1>CONTACT</h1>
        <p>
          Whether you have a project, a role or a question, my inbox is always
          open. I'll get back to you as soon as I can.
        </p>
      </section>

      <div className="ct-grid">
        <div className="ct-info ct-anim">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                className="ct-channel"
                key={c.label}
                href={c.href}
                data-cursor="disable"
                {...(c.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="ct-channel-icon" style={{ color: c.color }}>
                  <Icon />
                </span>
                <span className="ct-channel-text">
                  <span className="ct-channel-label">{c.label}</span>
                  <span className="ct-channel-value">{c.value}</span>
                </span>
                <MdArrowOutward className="ct-channel-arrow" />
              </a>
            );
          })}
        </div>

        <form className="ct-form ct-anim" onSubmit={handleSubmit}>
          <div className="ct-field">
            <input
              id="ct-name"
              type="text"
              placeholder=" "
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label htmlFor="ct-name">Your name</label>
          </div>
          <div className="ct-field">
            <input
              id="ct-email"
              type="email"
              placeholder=" "
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label htmlFor="ct-email">Your email</label>
          </div>
          <div className="ct-field">
            <textarea
              id="ct-message"
              rows={5}
              placeholder=" "
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <label htmlFor="ct-message">Your message</label>
          </div>
          <button
            type="submit"
            className="ct-submit"
            data-cursor="disable"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}{" "}
            <MdArrowOutward />
          </button>
          {status === "success" && (
            <p className="ct-success">
              Thanks! Your message has been sent, I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="ct-error">
              Something went wrong. Please email me directly at
              loukikkokate87@gmail.com.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
