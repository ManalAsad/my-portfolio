import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const PROJECTS = [

  {
    title: 'PinFit',
    date: '2026',
    tech: ['JavaScript', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/GSauce777/PinFit.git',
    bullets: [
      'Currently working on a full-stack web application with a group of 4 members that helps users to visualize their outfits and save them for future reference, using JavaScript, HTML, CSS, and MySQL.',
      'Implemented a MySQL database with optimized schemas for storing user created outfits and enable save/load functionality',
      'Created RESTful API with full CRUD functionality for saving, loading, and deleting outfits from a shared database.'
    ],
  },
  
  {
    title: 'Munch & Media - SRS',
    date: '2024',
    tech: ['Requirement Engineering', 'SRS','Risk Management'],
    bullets: [
      'Authored Software Requirements Specification (SRS) for a themed recipe and media recommendation platform using structured software engineering practices.',
      'Interviewed 5+ potential users to gather requirements and feedback, ensuring the SRS captured real user needs and preferences.',
      'Defined system requirements, user stories, and use cases using goal and obstacle modeling to guide design decisions and identify risks.',
      'Collaborated in a 4-person team to gather stakeholder needs, prioritize features, and produce formal project documentation.'
    ],
  },
  
  {
    title: 'Student Performance Dashboard',
    date: '2025',
    tech: ['React', 'CSS', 'Node.js', 'Express', 'Google Cloud Run', 'Cloud SQL (MySQL)'],
    github: 'https://github.com/ManalAsad/Students-Performance-Tracker.git',
    bullets: [
      'Built a full-stack teacher dashboard using React (Firebase Hosting) and Node.js (Google Cloud Run) to track student test scores, attendance, and performance analytics',
      'Designed and integrated a Cloud SQL (MySQL) database for secure storage of student records with encrypted environment variables',
      'Implemented automatic scaling backend on Google Cloud Run that adjusts to traffic demand, ensuring reliable access during peak usage',
      'Enabled real-time student search, performance updates, and visual analytics dashboards for teachers to monitor progress'
    ],
  },
    {
    title: 'Budget Buddy',
    date: 'May 2025',
    tech: ['Java', 'JavaFX', 'SQL','CSS', 'MVC', 'Scrum'],
    github: 'https://github.com/ManalAsad/SE370-2025-Team3_BudgetingSystem.git',
    bullets: [
      'Developed a budgeting app with visual analytics, category tracking, and spending limits using MVC architecture.',
      'Designed SQL database schemas and integrated a Java backend with JavaFX UI for intuitive budget visualization.',
      'Collaborated in an Agile/Scrum team with sprints, standups, and retrospectives; improved sprint efficiency by ~25%.',
      'Authored full SRS and Design documents; delivered a functional prototype within 6 sprint cycles.',
    ],
  },
      {
    title: 'Smart Vaccination Management System - SRS',
    date: 'December 2023',
    tech: ['Requirement Engineering', 'SRS', 'Agile'],
    bullets: [
      'Collaborated on designing a vaccination tracking and management system to reduce immunization errors and streamline vaccination records.', 
      'Conducted 10+ stakeholder and end-user interviews to gather requirements and feedback for system improvements.', 
      'Authored a detailed Software Requirements Specification (SRS) document, ensuring all requirements were captured.', 
      'Applied Agile principles during requirement collection and feedback integration, enabling iterative refinement of system features. '
    ],
  },

]

const SKILLS = [
  {
    group: 'Languages',
    items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS','Python', 'Overleaf (LaTeX)'],
  },
  {
    group: 'Frameworks & Tools',
    items: ['React', 'JavaFX', 'Node.js', 'Express', 'Vite'],
  },
  {
    group: 'Cloud & Databases',
    items: ['Google Cloud Run', 'Cloud SQL (MySQL)', 'Firebase Hosting'],
  },
  {
    group: 'Dev Practices',
    items: ['Agile / Scrum', 'MVC', 'GitHub','Requirement Engineering'],
  },
  {
    group: 'Project Management',
    items: ['Trello', 'Basecamp','lucidchart', 'Discord'],
  },
  {
    group:'Soft Skills',
    items: ['Team Collaboration','Adaptability','Organization','Time management','Attention to detail'],
  }
]

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="avatar">
            <img src={import.meta.env.BASE_URL + "images/profile1.png"} alt="Manal Asad" className="avatar-full" /></div>
          <div className="hero-content">
            <h1 className="hero-headline">
              Manal Asad<br /><br />
              <em>Software Engineering</em>
            </h1>
            <p className="hero-sub">
              Seeking opportunities to apply my technical skills and gain hands-on experience. 
              Organized, dependable, and able to manage multiple priorities with a positive attitude. 
              Committed to team success through collaboration and continuous learning.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>

                View Projects ↓
              </a>
              <a href={import.meta.env.BASE_URL + 'public/resume/resume.pdf'} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>

        </div>
      </section>


{/* ── ABOUT ── */}
<section className="section" id="about">
  <hr className="divider" style={{ marginBottom: '4rem' }} />
  <p className="section-label">About me</p>
  <h2 className="section-title">Who I Am<br/><em>& Where I come From.</em></h2>
  <div className="about-grid">
    <div className="about-text">
      <p>
        I'm a Software Engineering student at California State University, San Marcos (CSUSM), 
        originally from <strong>Pakistan</strong>. I moved to the US as an international student 
        and transferred to CSUSM in <strong>2024</strong>.
      </p>
      <p>
        This journey hasn't just been about earning a degree. It's been about adapting to a new culture, 
        a new education system, and a new way of thinking. Every challenge has shaped me into a more resilient, resourceful, 
        and empathetic person.
      </p>
      <p>
        Along the way, I've had the chance to work on innovative projects with incredible people.
        These experiences have taught me that great software 
        isn't just about code, it's about teamwork, communication, and shared vision.
      </p>
      <p>
        Outside of academics and project, I am interested in sports such as badminton, tennis, 
        and Formula 1. I also enjoy watching Korean dramas. I am always curious to learn new things and
         continue growing both personally and professionally.
      </p>
    </div>
    <div className="about-details">
      <div className="detail-card">
        <div className="detail-card-label">Education</div>
        <div className="detail-card-value">California State University, San Marcos</div>
        <div className="detail-card-sub">BS Software Engineering · Expected May 2027</div><br/>
        <div className="detail-card-value">Institute of Management Sciences, Pakistan</div>
        <div className="detail-card-sub">BS Software Engineering · 2021 - 2023</div>
      </div>
            <div className="detail-card">
        <div className="detail-card-label">Academic</div>
        <div className="detail-card-value">GPA: 3.77 / 4.0</div>
        <div className="detail-card-sub">Dean's List</div>
      </div>
      <div className="detail-card">
        <div className="detail-card-label">Current Role</div>
        <div className="detail-card-value">AV/IT Student Assistant</div>
        <div className="detail-card-sub">CSUSM-University Student Union · Sep 2024 – Present</div>
      </div>
    </div>
  </div>
</section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects" style={{ background: 'none' }}>
        <hr className="divider" style={{ marginBottom: '4rem' }} />
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects &amp;<br /><em>work samples.</em></h2>
        <p className="section-desc">
 Click the GitHub links to explore the code.
        </p>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card">
              <div className="project-card-top">
                <div className="project-icon">{p.icon}</div>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
                    <FaGithub size={18} /><span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', padding: '0.3rem 0.65rem' }}>Github</span>
                  </a>
                ) : (
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', padding: '0.3rem 0.65rem' }}>Software Requirement and Specification</span>
                )}
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-date">{p.date}</div>
              <ul className="project-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="tech-tags">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <hr className="divider" style={{ marginBottom: '4rem' }} />
        <p className="section-label">Experience</p>
        <h2 className="section-title">Work &amp; <em>leadership.</em></h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-header">
              <span className="timeline-role">AV/IT Student Assistant</span>
              <span className="timeline-period">Sep 2024 – Present</span>
            </div>
            <div className="timeline-org">University Student Union, CSUSM</div>
            <ul className="timeline-bullets">
              <li>Perform setup and operation of small to large-scale audiovisual systems for 
                live events, ensuring a flawlessly executed experience for all patrons and guests.</li>
              <li>Provide IT-related troubleshooting, resolving technical issues for clients 
                to ensure all event needs are met.</li>
              <li>Utilize Basecamp application to maintain a comprehensive digital calendar, 
                tracking all on-campus event timelines and equipment needs.</li>
              <li>Collaborate with event coordinators and staff to determine project priorities and timelines.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-header">
              <span className="timeline-role">Business Fest (BFest) — Organizing Team Member</span>
              <span className="timeline-period">2023</span>
            </div>
            <div className="timeline-org">Pakistan . Leadership &amp; Project Management</div>
            <ul className="timeline-bullets">
              <li>Planned and executed a successful on-campus event showcasing student 
                business ideas on sustainability, attracting over 160 student participants.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-header">
              <span className="timeline-role">Hult Prize — Planning Team Member</span>
              <span className="timeline-period">2023</span>
            </div>
            <div className="timeline-org">Pakistan . Leadership &amp; Project Management</div>
            <ul className="timeline-bullets">
              <li>Contributed to planning and executing a major on-campus event for a globally 
                recognized social entrepreneurship competition, successfully supporting all participating student teams.</li>
              <li>Managed all operational aspects from pre-event preparation to day-of execution with
                 the event planning committee.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section" id="skills">
        <div className="section">
          <p className="section-label">Skills &amp; tools</p>
          <h2 className="section-title">What I<br /><em>work with.</em></h2>
          <div className="skills-grid">
            {SKILLS.map(sg => (
              <div key={sg.group} className="skill-group">
                <div className="skill-group-title">{sg.group}</div>
                <div className="skill-list">
                  {sg.items.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <hr className="divider" style={{ marginBottom: '4rem' }} />
        <p className="section-label">Say hello</p>
        <h2 className="section-title">Let's connect<br /><em>and build.</em></h2>
        <div className="contact-wrapper">
          <div className="contact-links">
            <a href="mailto:manalasad18@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              <div>
                <div style={{ fontWeight: 500 }}>Email</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>manalasad18@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/ManalAsad" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">
                <FaGithub size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>GitHub</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>github.com/ManalAsad</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/manal-asad" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">
                <FaLinkedin size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>LinkedIn</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>linkedin.com/in/ManalAsad</div>
              </div>
            </a>
          </div>
          <div>
            <div className="detail-card">
              <div className="detail-card-label">Based in</div>
              <div className="detail-card-value">San Diego, CA</div>
              <div className="detail-card-sub">Open to remote &amp; hybrid roles</div>
            </div>
            <div className="detail-card" style={{ marginTop: '0.75rem' }}>
              <div className="detail-card-label">Status</div>
              <div className="detail-card-value" style={{ display: 'flex'}}>
                Available for opportunities
              </div>
              <div className="detail-card-sub">Expected graduation: May 2027</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span className="footer-name">Manal Asad · Software Engineer</span>
      </footer>
    </div>
  )
}