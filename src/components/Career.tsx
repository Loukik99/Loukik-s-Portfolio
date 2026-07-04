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
                <h4>Software Engineer (Full Stack)</h4>
                <h5>SDK Infotech Pvt Ltd · Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting and shipping production-grade full-stack applications
              with React, Next.js, Node.js and PostgreSQL. I design RESTful APIs
              with rate limiting and versioning, build real-time features using
              Socket.io with Redis caching, optimise database queries, and mentor
              junior developers while delivering under tight deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Jain University · Bangalore</h5>
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
                <h5>Rani Channamma University · Belagavi</h5>
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
