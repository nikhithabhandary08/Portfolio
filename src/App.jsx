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
           <a href="#experience">Experience</a>
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
            {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>Programming</h3>
            <p>Python, Java, C, JavaScript</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Web Development</h3>
            <p>React, HTML, CSS, Flask, Django, Node.js</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>AI / Machine Learning</h3>
            <p>TensorFlow, PyTorch, Scikit-learn</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Databases</h3>
            <p>MySQL, MongoDB, SQLite</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Development</h3>
            <p>REST APIs, Backend Development, Database Design</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Tools</h3>
            <p>Git, GitHub, Power BI, Tableau</p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
<section id="experience" className="experience-section">
  <div className="section-heading">
    <p>EXPERIENCE</p>
    <h2>Where I gained practical experience.</h2>
  </div>

  <div className="experience-list">

    <div className="experience-card">
      <div className="experience-date">
        2024
      </div>

      <div className="experience-details">
        <h3>Web Developer Intern</h3>
        <h4>Hash Infotech</h4>

        <p>
          Worked on responsive web application components using
          HTML, CSS, JavaScript, and React.js. Gained practical
          experience in frontend development, testing, debugging,
          and improving application functionality.
        </p>

        <div className="experience-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
        </div>
      </div>
    </div>


    <div className="experience-card">
      <div className="experience-date">
        2025
      </div>

      <div className="experience-details">
        <h3>Full Stack Development Intern</h3>
        <h4>Softionik</h4>

        <p>
          Worked on full-stack web development and gained practical
          experience in building frontend interfaces, backend APIs,
          database integration, and developing functional web
          applications.
        </p>

        <div className="experience-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}

export default App;