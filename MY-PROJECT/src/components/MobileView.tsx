import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Twitter, ExternalLink, Code, Database, Server, Layout } from "lucide-react";
import { content } from "../data/mobilecontent";

const MobileView: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const skillIcons: Record<string, JSX.Element> = {
    frontend: <Layout size={24} />,
    backend: <Server size={24} />,
    database: <Database size={24} />,
    other: <Code size={24} />,
  };

  return (
    <div className="mobile-view">
      <nav className="nav-dots">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`nav-dot ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </nav>

      <section ref={(el) => (sectionsRef.current[0] = el)} className="section hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src="/avatar.jpg" alt="Profile" className="profile-img" />
          <h1 className="name-title">Your Name</h1>
          <p className="role-title">Full Stack Developer</p>
          <p className="text-gray-400 max-w-md">{content?.about || "About section not available"}</p>
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[1] = el)} className="section skill-section">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {content?.skills?.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skillIcons[skill.category] || <Code size={24} />}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          )) || <p>No skills available.</p>}
        </div>
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} className="section">
        <h2 className="section-title">Projects</h2>
        {content?.projects?.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="project-tech">
              {project.tech?.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300">
              View Project <ExternalLink size={16} />
            </a>
          </div>
        )) || <p>No projects available.</p>}
      </section>

      <section ref={(el) => (sectionsRef.current[3] = el)} className="section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-gray-400">your.email@example.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={20} />
            </div>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-gray-400">+1234567890</div>
            </div>
          </div>
        </div>

        <div className="social-grid">
          {content?.socials
            ? Object.entries(content.socials).map(([platform, link]) => (
                <a key={platform} href={link} className="social-link">
                  <div className="contact-icon">
                    {platform === "github" ? (
                      <Github size={20} />
                    ) : platform === "linkedin" ? (
                      <Linkedin size={20} />
                    ) : (
                      <Twitter size={20} />
                    )}
                  </div>
                  <span className="capitalize">{platform}</span>
                </a>
              ))
            : <p>No social links available.</p>}
        </div>
      </section>
    </div>
  );
};

export default MobileView;
