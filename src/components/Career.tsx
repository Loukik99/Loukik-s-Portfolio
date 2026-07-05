import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full-Stack Developer</h4>
                <h5>Self-employed · Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Partnering with clients and teams to design, build and ship
              modern, scalable web applications end to end. I craft responsive
              front-ends with React and Next.js, and build secure REST and
              real-time APIs with Node.js, Express and PostgreSQL, delivering
              polished, reliable releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Jain University · Bengaluru · 2023-2025</h5>
              </div>
              <h3>MCA</h3>
            </div>
            <p>
              Deepened my foundation in system design, data structures and
              scalable software engineering, with a focus on building real,
              production-ready applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Govindram Science College · Belgaum · 2019-2022</h5>
              </div>
              <h3>BCA</h3>
            </div>
            <p>
              Built my core skills in programming, databases and web
              fundamentals, and discovered a lasting interest in full-stack
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
