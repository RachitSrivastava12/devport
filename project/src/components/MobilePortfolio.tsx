import React from 'react';
import { Github, Linkedin, Mail, Globe, Code, Database, Cloud, Award, Briefcase, GraduationCap } from 'lucide-react';

const MobilePortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-8">
          <img
            src="https://pics.craiyon.com/2023-11-30/xkRLi1qIRdiV6sR89Wl-7g.webp"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h1 className="text-3xl font-bold mb-2 text-white">Rachit Srivastava</h1>
          <p className="text-xl text-white">Full Stack Developer -- Web3</p>
        </div>
      </div>

      {/* About Section */}
      <section className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I’m a Full Stack Web Developer who loves building server-side applications, with
          a keen interest in Web3 and blockchain technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Code className="text-blue-500" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">Next.js</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">Tailwind CSS</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Database className="text-green-500" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">Express</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">NestJS</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">PostgreSQL</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Cloud className="text-purple-500" />
              <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">AWS</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Docker</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Git</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">The Whiteboard</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This application enables users to draw, save, and manage their creations using various tools and features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/RachitSrivastava12/BNGYA" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                <Globe className="w-4 h-4" /> Live Demo
              </a>
              <a href="https://github.com/RachitSrivastava12/BNGYA" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer Support Automation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A system designed to manage customer data and support tickets using Node.js, Express.js, MongoDB, GraphQL, and Dialogflow.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">GraphQL</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/RachitSrivastava12/AutomateCustomer" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                <Globe className="w-4 h-4" /> Live Demo
              </a>
              <a href="https://github.com/RachitSrivastava12/AutomateCustomer" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="text-blue-500" />
              <h3 className="text-xl font-semibold">Maven @ Risein</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2023 - Present</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Raised awareness about newer Blockchains like Stellar and Aptos in college campuses.</li>
              <li>Organized workshops and hackathons to teach students how to build on blockchain.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="text-blue-500" />
              <h3 className="text-xl font-semibold">Ambassador @ Decentraclasses</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2023 - Present</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Increased awareness about the Quest platform in Web3.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="text-blue-500" />
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">GL Bajaj Institute of Technology and Management, Noida</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="text-blue-500" />
              <h3 className="text-xl font-semibold">Intermediate and Matriculation</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">St. John’s School, Jaunpur</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="space-y-4">
          <a href="mailto:rachitsrivastava76@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Mail className="w-5 h-5" /> rachitsrivastava76@gmail.com
          </a>
          <a href="https://github.com/RachitSrivastava12" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Github className="w-5 h-5" /> github.com/RachitSrivastava12
          </a>
          <a href="https://www.linkedin.com/in/rachit-dhh/" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Linkedin className="w-5 h-5" /> linkedin.com/in/rachit-dhh
          </a>
          <a href="https://x.com/Rachit_twts" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Globe className="w-5 h-5" /> x.com/Rachit_twts
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1r_D7nwMBlwT5JQhToJjU0SO13D7FAG_O/view"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
        >
          Download Resume
        </a>
      </section>

      <footer className="bg-white dark:bg-gray-800 p-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        Made with ❤️ by Rachit Srivastava
      </footer>
    </div>
  );
};

export default MobilePortfolio;