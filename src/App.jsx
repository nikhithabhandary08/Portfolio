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
{/* Projects Section */}
<section id="projects" className="projects-section">
  <div className="section-heading">
    <p>MY PROJECTS</p>
    <h2>Things I've built.</h2>
  </div>

  <div className="projects-grid">

    {/* Project 1 */}
    <article className="project-card featured-project">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-type">AI / ML</span>
      </div>

      <h3>UPI Shield</h3>

      <p>
        An intelligent fraud detection system designed to identify
        suspicious digital payment activity and protect users from
        common UPI scams.
      </p>

      <ul className="project-features">
        <li>SMS scam detection using machine learning</li>
        <li>UPI ID and QR code verification</li>
        <li>Receipt text extraction using OCR</li>
        <li>KYC phishing detection</li>
      </ul>

      <div className="project-tech">
        <span>React</span>
        <span>FastAPI</span>
        <span>Python</span>
        <span>Scikit-learn</span>
        <span>OpenCV</span>
      </div>
    </article>


    {/* Project 2 */}
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-type">AI / ML</span>
      </div>

      <h3>FarmEye</h3>

      <p>
        An AI-driven livestock health assistance system that helps
        identify cattle breeds and provides disease prediction and
        veterinary information.
      </p>

      <ul className="project-features">
        <li>Cattle breed identification using CNN</li>
        <li>Symptom-based disease prediction</li>
        <li>Disease information module</li>
        <li>Veterinary locator</li>
      </ul>

      <div className="project-tech">
        <span>Python</span>
        <span>PyTorch</span>
        <span>CNN</span>
        <span>Flask</span>
      </div>
    </article>


    {/* Project 3 */}
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-type">FULL STACK</span>
      </div>

      <h3>Food Rescue App</h3>

      <p>
        A full-stack web application that connects restaurants with
        people or organizations to help reduce food waste by
        redistributing surplus food.
      </p>

      <ul className="project-features">
        <li>Restaurant food listing</li>
        <li>Food availability management</li>
        <li>REST API integration</li>
        <li>Database-backed application</li>
      </ul>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
      </div>
    </article>


    {/* Project 4 */}
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">04</span>
        <span className="project-type">BACKEND</span>
      </div>

      <h3>Tuition Fee Reminder</h3>

      <p>
        A web application designed to help manage student tuition
        fee information and provide reminders for upcoming payments.
      </p>

      <ul className="project-features">
        <li>Student fee management</li>
        <li>Payment tracking</li>
        <li>Reminder functionality</li>
        <li>Database integration</li>
      </ul>

      <div className="project-tech">
        <span>Spring Boot</span>
        <span>Java</span>
        <span>MySQL</span>
      </div>
    </article>

  </div>
</section>
{/* Education Section */}
<section id="education" className="education-section">
  <div className="section-heading">
    <p>EDUCATION</p>
    <h2>My academic journey.</h2>
  </div>

  <div className="education-list">
    <div className="education-card">
      <div className="education-year">2026</div>

      <div>
        <h3>Master of Computer Applications (MCA)</h3>
        <h4>NMAM Institute of Technology, Nitte</h4>
        <p>
          Building a strong foundation in software development,
          artificial intelligence, machine learning, databases,
          and application development.
        </p>
      </div>
    </div>

    <div className="education-card">
      <div className="education-year">2024</div>

      <div>
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <h4>ALVA'S College, Moodbidri</h4>
        <p>
          Developed foundational knowledge in programming,
          databases, web development, and computer applications.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;