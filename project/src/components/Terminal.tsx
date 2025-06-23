import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Terminal as TerminalIcon, Github, Linkedin, Mail, Globe, Briefcase, GraduationCap, Award, Twitter } from 'lucide-react';

interface Command {
  input: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  const handleCommand = (cmd: string) => {
    const commandMap: { [key: string]: React.ReactNode } = {
      'help': (
        <div className="text-green-400">
          Available commands:
          <br />• about - Learn about me
          <br />• skills - View my technical skills
          <br />• projects - See my projects
          <br />• experience - View my work experience
          <br />• education - View my education
          <br />• contact - Get my contact information
        
          <br />• resume - Download my resume
          <br />• clear - Clear the terminal
          <br />• help - Show this help message
        </div>
      ),
      'about': (
        <div className="text-blue-400">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://pics.craiyon.com/2023-11-30/xkRLi1qIRdiV6sR89Wl-7g.webp"
              alt="Rachit Srivastava"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">Rachit Srivastava</h2>
              <p className="text-sm">Full Stack Developer -- Web3</p>
            </div>
          </div>
          <p>
          I’m a Full Stack Web Developer who loves building scalable and user-friendly applications, with
          a keen interest in Web3 and blockchain technologies.
          </p>
        </div>
      ),
      'skills': (
        <div className="text-yellow-400">
          <h3 className="font-bold mb-2">Technical Skills:</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold">Programming Languages:</h4>
            <p>JavaScript, TypeScript, Python, Rust</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold">Frontend:</h4>
            <p>React, Next.js, Tailwind, Material-UI</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold">Backend:</h4>
            <p>Node.js, Express.js</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold">Databases:</h4>
            <p>PostgreSQL, MongoDB, Redis</p>
          </div>
          
          <div>
            <h4 className="font-semibold">DevOps & Tools:</h4>
            <p>AWS, Docker, CI/CD, Git</p>
          </div>
        </div>
      ),
     'projects': (
  <div className="text-purple-400">
    <h3 className="font-bold mb-4">Featured Projects:</h3>

    {/* Finished Projects */}
    <div className="mb-6">
      <h4 className="font-semibold">Solana Blockchain Explorer</h4>
      <p className="mb-2">Developed a Solana Explorer with real-time transaction and block data.</p>
            <div className="mt-2 space-x-4">
        <a href="https://solana-explorer-ten.vercel.app/" className="text-blue-400 hover:underline">Live</a>
        <a href="https://github.com/RachitSrivastava12/SolanaExplorer" className="text-blue-400 hover:underline">Repo</a>
      </div>
    </div>

<div className="mb-6">
      <h4 className="font-semibold">Solana Blockchain Indexer</h4>
      <p className="mb-2">Index solana data according to your preference of data</p>
       <div className="mt-2 space-x-4">
        <a href="https://solana-indexer-a7wc.vercel.app/" className="text-blue-400 hover:underline">Live</a>
        <a href="https://github.com/RachitSrivastava12/Solana-Indexer" className="text-blue-400 hover:underline">Repo</a>
      </div>
    </div>


    <div className="mb-6">
      <h4 className="font-semibold">The Blackboard</h4>
      <p className="mb-2">Drawing app with save/export features built with custom tools and canvas.</p>
           <div className="mt-2 space-x-4">
        <a href="https://whiteboard-taupe.vercel.app/" className="text-blue-400 hover:underline">Live</a>
        <a href="https://github.com/RachitSrivastava12/BNGYA" className="text-blue-400 hover:underline">Repo</a>
      </div>
    </div>


    <div className="mb-6">
      <h4 className="font-semibold">Customer Support Automation</h4>
      <p className="mb-2">Automated customer support system using Node.js, MongoDB, GraphQL, and Dialogflow.</p>
      <div className="mt-2">
        <a href="https://github.com/RachitSrivastava12/AutomateCustomer" className="text-blue-400 hover:underline">Repo</a>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold">Crypto Price Tracker</h4>
      <p className="mb-2">Real-time tracker for cryptocurrency prices and market trends.</p>
      <div className="mt-2">
        <a href="https://github.com/RachitSrivastava12/Crypto-Price-Tracker" className="text-blue-400 hover:underline">GitHub</a>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold">Transaction Management API</h4>
      <p className="mb-2">GraphQL API for transactions using TypeScript, PostgreSQL, Redis & JWT auth.</p>
      <div className="mt-2">
        <a href="https://github.com/RachitSrivastava12/Transaction-Management-Api" className="text-blue-400 hover:underline">GitHub</a>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold">Course Management API</h4>
      <p className="mb-2">Built a modular GraphQL API with MongoDB, Apollo Server, and logging tools.</p>
      <div className="mt-2">
        <a href="https://github.com/RachitSrivastava12/CourseManagementApi" className="text-blue-400 hover:underline">GitHub</a>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold">Rust CRUD App</h4>
      <p className="mb-2">A basic CRUD API built with Rust.</p>
      <a href="https://github.com/RachitSrivastava12/Rust-Crud" className="text-blue-400 hover:underline">Repo</a>
    </div>

    {/* Projects in Progress (WIP) */}
    <h3 className="font-bold mb-4 mt-8">🚧 In Progress:</h3>

    <div className="mb-6">
      <h4 className="font-semibold"> Energy Trading DApp (WIP)</h4>
      <p className="mb-2">Building a decentralized energy trading platform using smart contracts and Web3 infra.</p>
      <a href="https://github.com/RachitSrivastava12/Depin-Energy-Marketplace" className="text-blue-400 hover:underline">Repo</a>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold"> Depin Referral System (WIP)</h4>
      <p className="mb-2">Referral system for Depin protocols on Solana.</p>
      <div className="mt-2 space-x-4">
        <a href="https://solana-referral.vercel.app/" className="text-blue-400 hover:underline">Live</a>
        <a href="https://github.com/RachitSrivastava12/SolanaReferral" className="text-blue-400 hover:underline">Repo</a>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold"> Ad Verification Platform (WIP)</h4>
      <p className="mb-2">Platform to verify digital ads for transparency and legitimacy.</p>
<div className="mt-2 space-x-4">
      <a href="https://ad-verify.vercel.app/" className="text-blue-400 hover:underline">Live</a>
      <a href="https://github.com/RachitSrivastava12/Ad-Verify" className="text-blue-400 hover:underline">Repo</a>
       
    </div>

    <div className="mb-6">
      <h4 className="font-semibold"> Portfolio (Live)</h4>
      <p className="mb-2">My personal portfolio site showcasing skills, projects, and contact info.</p>
      <a href="https://devport-joz2.vercel.app/" className="text-blue-400 hover:underline">Live</a>
    </div>
  </div>
),

      'experience': (
        <div className="text-cyan-400">
          <h3 className="font-bold mb-4">Work Experience:</h3>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4" /> 
              <h4 className="font-semibold">Maven  @Risein</h4>
            </div>
            <ul className="list-disc list-inside">
              <li>Raised awareness newer Blockchains particularly Stellar and Aptos in college campuses.
              Organize workshops and hackathons to teach students how to built on blockchain</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4" />
              <h4 className="font-semibold">Ambassador @ Decentraclasses</h4>
            </div>
          
            <ul className="list-disc list-inside">
              <li>A web3 quest platform.
              Increased awareness about the Quest platform in web3.</li>
             
            </ul>
          </div>
        </div>
      ),
      'education': (
        <div className="text-green-400">
          <h3 className="font-bold mb-4">Education:</h3>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" />
              <h4 className="font-semibold">Bachelor of Technology in computer Science</h4>
            </div>
            <p>GL Bajaj Institute of Technology and Management, Noida</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" />
              <h4 className="font-semibold">Intermediate and Matriculation</h4>
            </div>
            <p>St. Jhon’s School, Jaunpur</p>
          </div>
        </div>
      ),
      'contact': (
        <div className="text-blue-400 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:rachitsrivastava76@gmail.com" className="hover:underline">
            rachitsrivastava76@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <a href="https://github.com/RachitSrivastava12" className="hover:underline">
            https://github.com/RachitSrivastava12
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <a href="https://www.linkedin.com/in/rachit-dhh/" className="hover:underline">
            https://www.linkedin.com/in/rachit-dhh/
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Twitter className="w-4 h-4" />
            <a href="https://x.com/Rachit_twts" className="hover:underline">
            https://x.com/Rachit_twts
            </a>
          </div>
        </div>
      ),
     
      'resume': (
        <div className="text-green-400">
          <p className="mb-4">Download my resume in PDF format:</p>
          <a
            href="https://drive.google.com/file/d/1r_D7nwMBlwT5JQhToJjU0SO13D7FAG_O/view?usp=sharing"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      ),
      'clear': null,
    };

    if (cmd === 'clear') {
      setCommands([]);
      return;
    }

    const output = commandMap[cmd.toLowerCase()] || (
      <span className="text-red-400">Command not found. Type 'help' for available commands.</span>
    );

    setCommands([...commands, { input: cmd, output }]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
      handleCommand('help');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-terminal-bg rounded-lg overflow-hidden shadow-xl border border-gray-700">
      <div className="bg-gray-800 p-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <TerminalIcon size={14} />
          <span className="text-sm">Rachit.sh</span>
        </div>
      </div>
      
      <div className="p-4 font-mono text-sm overflow-y-auto h-[calc(100%-2.5rem)] bg-terminal-bg text-terminal-text">
        <TypeAnimation
          sequence={[
            'Welcome to my  portfolio!\nType "help" to see available commands.',
            () => setShowPrompt(true)
          ]}
          wrapper="div"
          cursor={false}
          className="text-green-400"
        />
        
        {commands.map((cmd, i) => (
          <div key={i} className="mt-4">
            <div className="flex items-center gap-2">
              <span className="text-terminal-prompt">Rachit@portfolio</span>
              <span className="text-gray-400">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-gray-400">$</span>
              <span className="text-white">{cmd.input}</span>
            </div>
            <div className="mt-2">{cmd.output}</div>
          </div>
        ))}
        
        {showPrompt && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) {
                handleCommand(input.trim());
                setInput('');
              }
            }}
            className="mt-4 flex items-center gap-2"
          >
            <span className="text-terminal-prompt">Rachit@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-gray-400">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent text-white focus:outline-none flex-1"
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Terminal;
