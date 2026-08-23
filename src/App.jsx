import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">NB.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="hero">
        <div className="hero-content">
          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Nikhitha
            <span> Bhandary</span>
          </h1>

          <h2>AI/ML • Full Stack • Software Developer</h2>

          <p className="hero-description">
            MCA student passionate about building practical software
            solutions using AI/ML, full-stack development, and modern
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="https://github.com/nikhithabhandary08"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-placeholder">
              NB
            </div>
          </div>
        </div>
      </main>
            {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning ideas into practical solutions.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am an MCA student at NMAM Institute of Technology, Nitte,
              with a strong interest in software development, artificial
              intelligence, and machine learning.
            </p>

            <p>
              I enjoy building practical applications that combine
              problem-solving with modern technologies. My experience
              includes full-stack development, AI/ML projects, database
              development, and REST API development.
            </p>

            <p>
              I am currently looking for an entry-level opportunity where
              I can apply my technical skills, continue learning, and
              contribute effectively to a professional team.
            </p>
          </div>

          <div className="about-card">
            <span>MCA</span>
            <strong>2026</strong>
            <small>NMAM Institute of Technology</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;