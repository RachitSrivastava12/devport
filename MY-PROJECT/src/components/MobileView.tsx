import React, { useEffect, useRef, useState ,JSX } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code,
  Database,
  Server,
  Layout,
} from "lucide-react";
import { throttle } from "lodash";
import { content } from "../data/mobilecontent"; // Adjust the import path as needed

// Define TypeScript interfaces for content
interface Skill {
  name: string;
  category: string;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

interface Content {
  about: string;
  skills: Skill[];
  projects: Project[];
  socials: Record<string, string>;
  contact: {
    email: string;
    phone: string;
  };
}

const MobileView: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize sectionsRef with the correct number of sections
  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, 4);
  }, []);

  // Throttled scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 100); // Throttle to 100ms
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Scroll to section with offset for fixed elements
  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      const offset = 80; // Adjust this value based on your fixed header/nav height
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  // Skill icons mapping
  const skillIcons: Record<string, JSX.Element> = {
    frontend: <Layout size={24} />,
    backend: <Server size={24} />,
    database: <Database size={24} />,
    other: <Code size={24} />,
  };

  const getSkillIcon = (category: string) => {
    if (!skillIcons[category]) {
      console.warn(`Unknown skill category: ${category}`);
    }
    return skillIcons[category] || <Code size={24} />;
  };

  // Social icons mapping
  const socialIcons: Record<string, JSX.Element> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
  };

  return (
    <div className="mobile-view">
      {/* Navigation Dots */}
      <nav className="nav-dots">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`nav-dot ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
            role="button"
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            sectionsRef.current[0] = el;
          }
        }}
        className="section hero-section"
      >
        <div className="hero-bg" />
        <div className="hero-content">
          <img
            src="/avatar.webp"
            alt="Profile"
            className="profile-img"
            loading="lazy"
          />
          <h1 className="name-title">Your Name</h1>
          <p className="role-title">Full Stack Developer</p>
          <p className="about-text">{content.about}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            sectionsRef.current[1] = el;
          }
        }}
        className="section skill-section"
      >
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {content.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{getSkillIcon(skill.category)}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            sectionsRef.current[2] = el;
          }
        }}
        className="section"
      >
        <h2 className="section-title">Projects</h2>
        {content.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) {
            sectionsRef.current[3] = el;
          }
        }}
        className="section"
      >
        <h2 className="section-title">Contact</h2>
        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={20} />
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{content.contact.email}</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={20} />
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{content.contact.phone}</div>
            </div>
          </div>
        </div>

        <div className="social-grid">
          {Object.entries(content.socials).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                {socialIcons[platform] || <ExternalLink size={20} />}
              </div>
              <span className="capitalize">{platform}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileView;