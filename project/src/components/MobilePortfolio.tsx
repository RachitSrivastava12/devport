import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Code,
  Database,
  Cloud
} from 'lucide-react';

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
          I’m a Full Stack Web Developer who loves building scalable and user-friendly applications, with
          a keen interest in Web3 and blockchain technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Code className="text-blue-500" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Database className="text-green-500" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'NestJS', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Cloud className="text-purple-500" />
              <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Git', 'CI/CD'].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {/* Project 1 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Solana Blockchain Explorer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed a Solana Explorer with real-time transaction and block data.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
            </div>
            <a href="https://github.com/RachitSrivastava12/SolanaExplorer" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">The Blackboard</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This application enables users to draw, save, and manage their creations using various tools and features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
            </div>
            <a href="https://github.com/RachitSrivastava12/BNGYA" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Portfolio Builder</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Portfolio Builder allowing users to create portfolios using form inputs and templates. Built using ReactJS (Typescript).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
            </div>
            <a href="https://github.com/RachitSrivastava12/BYP" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer Support Automation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A system designed to manage customer data and support tickets using Node.js, Express.js, MongoDB, GraphQL, and Dialogflow.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded">Node.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded">GraphQL</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded">Dialogflow</span>
            </div>
            <a href="https://github.com/RachitSrivastava12/CSA" className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobilePortfolio;
