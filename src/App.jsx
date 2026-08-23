import { useEffect, useState } from "react";
import "./App.css";

const GITHUB_USERNAME = "nikhithabhandary08";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [contributions, setContributions] = useState([]);
  const [contributionTotal, setContributionTotal] = useState(0);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);

  // Fetch real GitHub contribution data
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setGithubLoading(true);
        setGithubError(false);

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch GitHub contributions");
        }

        const data = await response.json();

        const contributionData = data.contributions || [];

        setContributions(contributionData);

        const total = Object.values(data.total || {}).reduce(
          (sum, value) => sum + Number(value),
          0
        );

        setContributionTotal(total);
      } catch (error) {
        console.error("GitHub contribution error:", error);
        setGithubError(true);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Create a proper 7-row GitHub-style contribution grid
  const createHeatmap = () => {
    if (!contributions.length) return [];

    const firstDate = new Date(
      `${contributions[0].date}T00:00:00`
    );

    const startingDay = firstDate.getDay();

    const emptyCells = Array.from(
      { length: startingDay },
      (_, index) => ({
        empty: true,
        id: `empty-start-${index}`,
      })
    );

    const actualCells = contributions.map((day) => ({
      ...day,
      empty: false,
    }));

    const combined = [...emptyCells, ...actualCells];

    const remainder = combined.length % 7;

    if (remainder !== 0) {
      const additionalEmptyCells = Array.from(
        { length: 7 - remainder },
        (_, index) => ({
          empty: true,
          id: `empty-end-${index}`,
        })
      );

      combined.push(...additionalEmptyCells);
    }

    return combined;
  };

  const heatmapData = createHeatmap();

  const getMonthLabels = () => {
    if (!contributions.length) {
      return [];
    }

    const months = [];

    contributions.forEach((day, index) => {
      const date = new Date(`${day.date}T00:00:00`);

      const monthName = date.toLocaleString("en-US", {
        month: "short",
      });

      const key = `${date.getFullYear()}-${date.getMonth()}`;

      if (!months.some((month) => month.key === key)) {
        months.push({
          key,
          name: monthName,
          index,
        });
      }
    });

    return months.slice(0, 12);
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="portfolio">

      {/* =====================================
          NAVIGATION
      ===================================== */}

      <nav className="navbar">

        <button
          className="logo"
          onClick={() => handleNavigation("home")}
        >
          NB<span>.</span>
        </button>

        <div className="nav-links">

          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavigation("home")}
          >
            Home
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavigation("about")}
          >
            About
          </button>

          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => handleNavigation("skills")}
          >
            Skills
          </button>

          <button
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => handleNavigation("experience")}
          >
            Experience
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </button>

          <button
            className={activeSection === "education" ? "active" : ""}
            onClick={() => handleNavigation("education")}
          >
            Education
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </button>

        </div>
      </nav>


      {/* =====================================
          HOME
      ===================================== */}

      {activeSection === "home" && (
        <main className="page-section home-page">

          <div className="hero-content">

            <p className="hero-intro">
              HELLO, I'M
            </p>

            <h1>
              Nikhitha
              <span> Bhandary</span>
            </h1>

            <h2>
              AI/ML • Full Stack • Software Developer
            </h2>

            <p className="hero-description">
              MCA student passionate about building practical
              software solutions using AI/ML, full-stack development,
              and modern technologies.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => handleNavigation("projects")}
              >
                View My Projects
              </button>

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
      )}


      {/* =====================================
          ABOUT
      ===================================== */}

      {activeSection === "about" && (
        <section className="page-section about-section">

          <div className="section-heading">

            <p>ABOUT ME</p>

            <h2>
              Turning ideas into practical solutions.
            </h2>

          </div>

          <div className="about-content">

            <div className="about-text">

              <p>
                I am an MCA student at NMAM Institute of Technology,
                Nitte, with a strong interest in software development,
                artificial intelligence, and machine learning.
              </p>

              <p>
                I enjoy building practical applications that combine
                problem-solving with modern technologies. My experience
                includes full-stack development, AI/ML projects,
                database development, and REST API development.
              </p>

              <p>
                I am currently looking for an entry-level opportunity
                where I can apply my technical skills, continue
                learning, and contribute effectively to a professional
                team.
              </p>

            </div>

            <div className="about-card">

              <span>MCA</span>

              <strong>2026</strong>

              <small>
                NMAM Institute of Technology
              </small>

            </div>

          </div>

        </section>
      )}


      {/* SKILLS */}
{activeSection === "skills" && (
  <section className="page-section skills-page">

    <div className="skills-header">
      <p className="skills-label">MY SKILLS</p>

      <h1>
        Professional <span>Skillset</span>
      </h1>

      <div className="skills-line"></div>

      <p className="skills-subtitle">
        Technologies and tools I use to build practical software
        and AI-powered solutions.
      </p>
    </div>

    <div className="skill-pills">

      <div className="skill-pill">
        <span className="skill-icon python-icon">PY</span>
        Python
      </div>

      <div className="skill-pill">
        <span className="skill-icon java-icon">JA</span>
        Java
      </div>

      <div className="skill-pill">
        <span className="skill-icon c-icon">C</span>
        C
      </div>

      <div className="skill-pill">
        <span className="skill-icon js-icon">JS</span>
        JavaScript
      </div>

      <div className="skill-pill">
        <span className="skill-icon react-icon">⚛</span>
        React
      </div>

      <div className="skill-pill">
        <span className="skill-icon node-icon">JS</span>
        Node.js
      </div>

      <div className="skill-pill">
        <span className="skill-icon html-icon">HTML</span>
        HTML
      </div>

      <div className="skill-pill">
        <span className="skill-icon css-icon">CSS</span>
        CSS
      </div>

      <div className="skill-pill">
        <span className="skill-icon flask-icon">FL</span>
        Flask
      </div>

      <div className="skill-pill">
        <span className="skill-icon django-icon">DJ</span>
        Django
      </div>

      <div className="skill-pill">
        <span className="skill-icon ml-icon">ML</span>
        Machine Learning
      </div>

      <div className="skill-pill">
        <span className="skill-icon deep-icon">DL</span>
        Deep Learning
      </div>

      <div className="skill-pill">
        <span className="skill-icon cv-icon">CV</span>
        Computer Vision
      </div>

      <div className="skill-pill">
        <span className="skill-icon genai-icon">AI</span>
        Generative AI
      </div>

      <div className="skill-pill">
        <span className="skill-icon tensorflow-icon">TF</span>
        TensorFlow
      </div>

      <div className="skill-pill">
        <span className="skill-icon pytorch-icon">PT</span>
        PyTorch
      </div>

      <div className="skill-pill">
        <span className="skill-icon sklearn-icon">SK</span>
        Scikit-learn
      </div>

      <div className="skill-pill">
        <span className="skill-icon cnn-icon">CNN</span>
        CNN
      </div>

      <div className="skill-pill">
        <span className="skill-icon api-icon">API</span>
        REST APIs
      </div>

      <div className="skill-pill">
        <span className="skill-icon mongo-icon">DB</span>
        MongoDB
      </div>

      <div className="skill-pill">
        <span className="skill-icon mysql-icon">SQL</span>
        MySQL
      </div>

      <div className="skill-pill">
        <span className="skill-icon sqlite-icon">DB</span>
        SQLite
      </div>

      <div className="skill-pill">
        <span className="skill-icon git-icon">G</span>
        Git
      </div>

      <div className="skill-pill">
        <span className="skill-icon github-icon">GH</span>
        GitHub
      </div>

      <div className="skill-pill">
        <span className="skill-icon powerbi-icon">BI</span>
        Power BI
      </div>

      <div className="skill-pill">
        <span className="skill-icon tableau-icon">TB</span>
        Tableau
      </div>

    </div>

  </section>
)}

      {/* =====================================
          EXPERIENCE
      ===================================== */}

      {activeSection === "experience" && (
        <section className="page-section experience-section">

          <div className="section-heading">

            <p>EXPERIENCE</p>

            <h2>
              Where I gained practical experience.
            </h2>

          </div>

          <div className="experience-list">

            <div className="experience-card">

              <div className="experience-date">
                2024
              </div>

              <div className="experience-details">

                <h3>
                  Web Developer Intern
                </h3>

                <h4>
                  Hash Infotech
                </h4>

                <p>
                  Worked on responsive web application components
                  using HTML, CSS, JavaScript, and React.js. Gained
                  practical experience in frontend development,
                  testing, debugging, and improving application
                  functionality.
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

                <h3>
                  Full Stack Development Intern
                </h3>

                <h4>
                  Softionik
                </h4>

                <p>
                  Worked on full-stack web development and gained
                  practical experience in building frontend interfaces,
                  backend APIs, database integration, and functional
                  web applications.
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
      )}


      {/* =====================================
          PROJECTS
      ===================================== */}

      {activeSection === "projects" && (
        <section className="page-section projects-section">

          <div className="section-heading">

            <p>MY PROJECTS</p>

            <h2>
              Things I've built.
            </h2>

          </div>

          <div className="projects-grid">

            <article className="project-card featured-project">

              <div className="project-top">
                <span className="project-number">
                  01
                </span>

                <span className="project-type">
                  AI / ML
                </span>
              </div>

              <h3>
                UPI Shield
              </h3>

              <p>
                An intelligent fraud detection system designed to
                identify suspicious digital payment activity and
                protect users from common UPI scams.
              </p>

              <ul className="project-features">
                <li>
                  SMS scam detection using machine learning
                </li>
                <li>
                  UPI ID and QR code verification
                </li>
                <li>
                  Receipt text extraction using OCR
                </li>
                <li>
                  KYC phishing detection
                </li>
              </ul>

              <div className="project-tech">
                <span>React</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>OpenCV</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-top">
                <span className="project-number">
                  02
                </span>

                <span className="project-type">
                  AI / ML
                </span>
              </div>

              <h3>
                FarmEye
              </h3>

              <p>
                An AI-driven livestock health assistance system that
                helps identify cattle breeds and provides disease
                prediction and veterinary information.
              </p>

              <ul className="project-features">
                <li>
                  Cattle breed identification using CNN
                </li>
                <li>
                  Symptom-based disease prediction
                </li>
                <li>
                  Disease information module
                </li>
                <li>
                  Veterinary locator
                </li>
              </ul>

              <div className="project-tech">
                <span>Python</span>
                <span>PyTorch</span>
                <span>CNN</span>
                <span>Flask</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-top">
                <span className="project-number">
                  03
                </span>

                <span className="project-type">
                  FULL STACK
                </span>
              </div>

              <h3>
                Food Rescue App
              </h3>

              <p>
                A full-stack web application that connects restaurants
                with people or organizations to help reduce food waste.
              </p>

              <ul className="project-features">
                <li>
                  Restaurant food listing
                </li>
                <li>
                  Food availability management
                </li>
                <li>
                  REST API integration
                </li>
                <li>
                  Database-backed application
                </li>
              </ul>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

            </article>


            <article className="project-card">

              <div className="project-top">
                <span className="project-number">
                  04
                </span>

                <span className="project-type">
                  BACKEND
                </span>
              </div>

              <h3>
                Tuition Fee Reminder
              </h3>

              <p>
                A web application designed to help manage student
                tuition fee information and provide reminders for
                upcoming payments.
              </p>

              <ul className="project-features">
                <li>
                  Student fee management
                </li>
                <li>
                  Payment tracking
                </li>
                <li>
                  Reminder functionality
                </li>
                <li>
                  Database integration
                </li>
              </ul>

              <div className="project-tech">
                <span>Spring Boot</span>
                <span>Java</span>
                <span>MySQL</span>
              </div>

            </article>

          </div>

        </section>
      )}


      {/* =====================================
          EDUCATION
      ===================================== */}

      {activeSection === "education" && (
        <section className="page-section education-section">

          <div className="section-heading">

            <p>EDUCATION</p>

            <h2>
              My academic journey.
            </h2>

          </div>

          <div className="education-list">

            <div className="education-card">

              <div className="education-year">
                2026
              </div>

              <div>

                <h3>
                  Master of Computer Applications (MCA)
                </h3>

                <h4>
                  NMAM Institute of Technology, Nitte
                </h4>

                <p>
                  Building a strong foundation in software development,
                  artificial intelligence, machine learning, databases,
                  and application development.
                </p>

              </div>

            </div>


            <div className="education-card">

              <div className="education-year">
                2024
              </div>

              <div>

                <h3>
                  Bachelor of Computer Applications (BCA)
                </h3>

                <h4>
                  ALVA'S College, Moodbidri
                </h4>

                <p>
                  Developed foundational knowledge in programming,
                  databases, web development, and computer applications.
                </p>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =====================================
          CONTACT
      ===================================== */}

      {activeSection === "contact" && (
        <section className="page-section contact-section">

          <div className="contact-content">

            <p className="contact-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something together.
            </h2>

            <p className="contact-description">
              I'm currently open to entry-level opportunities in
              AI/ML, software development, and full-stack development.
            </p>

            <div className="contact-links">

              <a href="mailto:nikhithabhandary08@gmail.com">
                Email ↗
              </a>

              <a
                href="https://github.com/nikhithabhandary08"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nikhitha-bhandary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;