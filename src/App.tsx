import React, { useState } from "react";
import emailjs from "emailjs-com";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  externalUrl?: string;
  videoUrl: string;
}


const projects: Project[] = [
  {
    id: 1,
    title: "Cold Email Generator",
    description: "Accelerated B2B lead generation by automating context-aware email creation powered by AI and job listing analysis.",
    imageUrl: process.env.PUBLIC_URL + "/assets/email_generator.PNG",
    details:
        "Sales teams waste hours manually researching prospects. This AI tool automates personalized cold email generation by analyzing job listings, helping services companies accelerate their sales pipeline with context-aware emails optimized for conversion.",
    tags: ["LLM", "LangChain", "Llama 3.1", "Groqcloud", "ChromaDB", "Python", "Streamlit", "Sales Automation"],
    githubUrl: "https://github.com/UjuAyoku/cold-email-generator/tree/main",
    demoUrl: "https://cold-email-creator.streamlit.app/",
    videoUrl: "",
  },
  {
    id: 2,
    title: "ARIA  - Audio Research & Intelligence Assistant",
    description: "Transformed research efficiency by converting complex topics into digestible, on-demand audio insights.",
    imageUrl: process.env.PUBLIC_URL + "/assets/workflow-diagram.PNG",
    details:
      "ARIA is an AI-powered research assistant built with n8n that automates topic research and converts summaries into podcast-style audio briefings for fast, hands-free knowledge consumption.",
    tags: ["n8n", "AI Agent", "Research", "OpenAI API", "Perplexity AI", "OpenAI Moderation", "Google Sheets API", "Open AI Text-To-Speech", "Workflow Automation"],
    githubUrl: "https://github.com/UjuAyoku/ARIA/tree/main",
    demoUrl: "https://n8n.research-ai-agent.com",
    videoUrl: "",
  },
    {
    id: 3,
    title: "Customer Churn Predictor",
    description: "Enabled proactive customer retention through predictive analytics and data-driven outreach strategies.",
    imageUrl: process.env.PUBLIC_URL + "/assets/customer_churn.PNG",
    details:
      "The Churn Predictor identifies customers at high risk of cancellation by analyzing tenure, service type, and spending patterns; empowering businesses to take targeted action before churn occurs.",
    tags: ["EDA", "Python", "Scikit-learn", "Pandas", "Numpy", "Flask",  "JavaScript", "Machine Learning", "Predictive Modeling", ],
    githubUrl: "https://github.com/UjuAyoku/churn-predictor",
    demoUrl: "https://github.com/UjuAyoku/churn-predictor",
    videoUrl: "",
  },
  {
    id: 4,
    title: "SmartMoney",
    description: "Helped users make informed financial decisions through transparent computation of interest rates and loan outcomes.",
    imageUrl: process.env.PUBLIC_URL + "/assets/smartmoney.PNG",
    details:
      "SmartMoney is a financial web app that calculates potential investment returns, loan payments, and mortgage interest, promoting financial literacy and confidence before committing to major financial decisions.",
    tags: ["Python", "Flask", "Docker", "Tailwind CSS", "Google Cloud", "Railway", "Financial Technology"],
    githubUrl: "https://github.com/UjuAyoku/smart-money",
    demoUrl: "https://smartmoney-58502441680.europe-west1.run.app/",
    videoUrl: "",
  },
  {
    id: 5,
    title: "Resume Optimizer",
    description:
      "Simplified job applications by offering AI-driven resume analysis and keyword optimization for creating tailored resumes for job postings.",
    imageUrl: process.env.PUBLIC_URL + "/assets/resume.PNG",
    details:
      "This app uses NLP and AI to analyze resumes against job descriptions, providing real-time keyword recommendations and an ATS compatibility score to help candidates stand out.",
    tags: ["AI", "NLP", "LLM", "OpenAI", "Python", "API", "CSS", "Streamlit Cloud", "ATS Optimization", "Resume Parsing"],
    githubUrl: "https://github.com/UjuAyoku/resume-optimizer/tree/main",
    demoUrl: "https://resumeoptimizerpro.streamlit.app/",
    videoUrl: "",
  },
  {
    id: 6,
    title: "Data Visualization",
    description: "Empowered decision-makers with intuitive, interactive dashboards that make business metrics actionable.",
    imageUrl: process.env.PUBLIC_URL + "/assets/data_viz.PNG",
    details:
      "A collection of interactive Tableau and Power BI dashboards designed to visualize key business data, uncover insights, and support data-informed decisions across teams.",
    tags: ["Tableau", "Power BI", "Data Visualization", "Dashboard", "Data Analysis", "Business Intelligence"],
    githubUrl: "",
    demoUrl: "https://public.tableau.com/app/profile/uju.ayoku/vizzes",
    videoUrl: "",
  },
];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message, please try again later.");
      }
    );
};


  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 to-purple-50"
      } font-sans`}
    >
      {/* Header */}
      <header
        className={`${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className={`text-3xl font-bold ${
              isDarkMode ? "text-purple-300" : "text-purple-900"
            }`}
          >
            Uju Ayoku
          </h1>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#projects"
                  className={`${
                    isDarkMode
                      ? "text-purple-300 hover:text-purple-100"
                      : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${
                    isDarkMode
                      ? "text-purple-300 hover:text-purple-100"
                      : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    isDarkMode
                      ? "text-purple-300 hover:text-purple-100"
                      : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-purple-600" : "bg-purple-300"
              }`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2
          className={`text-5xl font-bold ${
            isDarkMode ? "text-purple-300" : "text-purple-900"
          } mb-4`}
        >
          Hi,
        </h2>
        <h3
          className={`max-w-5xl mx-auto text-justify ${
            isDarkMode ? "text-purple-200" : "text-purple-900"
          } mb-4`}
        >
          I am Uju, a problem solver at heart, leading programs that bring structure to complexity and clarity to data. I manage cross-functional initiatives, 
          build AI-powered solutions, and believe critical thinking is the ultimate competitive edge.
        </h3>
        <p  
          className={`max-w-5xl mx-auto text-justify ${
            isDarkMode ? "text-purple-200" : "text-purple-900"
          } mb-8`}
        > If you are looking for someone who bridges technical depth with people-oriented leadership, you are in the right place. 
        I am always open to conversations about project leadership, data-driven transformation and innovation.
        </p>
        <a
          href="#projects"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300"
        >
          View My Portfolio
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-12">
        <h2
          className={`text-3xl font-bold ${
            isDarkMode ? "text-purple-300" : "text-purple-900"
          } mb-8 text-center`}
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-purple-300" : "text-purple-900"
                  } mb-2`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-purple-200" : "text-purple-900"
                  } mb-4`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-900 text-sm px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-lg max-w-2xl w-full p-6`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-purple-300" : "text-purple-900"
                }`}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className={`${
                  isDarkMode
                    ? "text-purple-300 hover:text-purple-100"
                    : "text-purple-600 hover:text-purple-900"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <iframe
              src={selectedProject.videoUrl}
              className="w-full h-64 mb-4"
              title={selectedProject.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p
              className={`${
                isDarkMode ? "text-purple-200" : "text-purple-600"
              } mb-4`}
            >
              {selectedProject.details}
            </p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                View on GitHub
              </a>
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section
        id="about"
        className={`${isDarkMode ? "bg-gray-800" : "bg-purple-50"} py-16`}
      >
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl font-bold ${
              isDarkMode ? "text-purple-300" : "text-purple-900"
            } mb-8 text-center`}
          >
            About Me
          </h2>
          <div className="max-w-5xl mx-auto text-justify">
            <p
              className={`${
                isDarkMode ? "text-purple-200" : "text-purple-900"
              } mb-4`}
            >
              I am a Project and Program Manager who thrives at the intersection of technology, strategy, and execution. Over the past several years, I have led complex, 
              multi-million-dollar initiatives, managing up to 16 concurrent projects and multiple sub-projects spanning diverse domains, time zones, and stakeholder groups.
              <br/><br/>
              At {" "}
                <a
                  href="https://about.rogers.com/?icid=R_COR_JOR_OB4PMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:underline"
                >
                  Rogers
                </a>, I manage two major capital programs where I ensure delivery excellence through meticulous budget oversight, contract alignment, and high-quality data 
              management across Jira, Confluence, Big Picture, and  Oracle Fusion. I work seamlessly with internal teams, external vendors, and cross-functional stakeholders to keep projects on track, 
              risks visible, and decisions data-informed.
              <br/><br/>              
              Beyond execution, I am passionate about <em className="italic text-purple-800">driving clarity through complexity</em>. I combine strategic planning, stakeholder alignment, and financial acumen with 
              technical fluency in <strong className="font-semibold text-purple-900">data science, machine learning, and AI</strong>, skills that not only inform my 
              decision-making but also enable me to bridge business goals with cutting-edge innovation.
              <br/><br/> 
              I actively contribute to our Project Managers Community of Practice through mentorship, collaboration, and knowledge sharing. Whether I am orchestrating delivery across 
              multiple streams or building end-to-end ML solutions in my own projects, I am motivated by the same purpose: <strong className="font-semibold text-purple-900">to deliver measurable value while keeping critical thinking and curiosity alive.</strong>
              <br/><br/> 
              Certified in Agile (Scrum, SAFe), PMP, Change management (PROSCI), Lean Portfolio Management, and ITIL, I bring a balance of analytical rigor, emotional 
              intelligence, and a deep understanding of Agile and hybrid frameworks to every engagement. My focus is simple - enable teams, anticipate risks, manage change 
              with empathy, and deliver results that stand up to data-driven scrutiny.
              </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16">
        <h2
          className={`text-3xl font-bold ${
            isDarkMode ? "text-purple-300" : "text-purple-900"
          } mb-8 text-center`}
        >
          Get in Touch
        </h2>        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className={`block ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-2`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full px-4 py-2 border ${
                isDarkMode
                  ? "border-purple-600 bg-gray-700 text-white"
                  : "border-purple-300"
              } rounded-lg focus:outline-none focus:border-purple-500`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full px-4 py-2 border ${
                isDarkMode
                  ? "border-purple-600 bg-gray-700 text-white"
                  : "border-purple-300"
              } rounded-lg focus:outline-none focus:border-purple-500`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              } mb-2`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className={`w-full px-4 py-2 border ${
                isDarkMode
                  ? "border-purple-600 bg-gray-700 text-white"
                  : "border-purple-300"
              } rounded-lg focus:outline-none focus:border-purple-500`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-purple-800"
        } text-white py-6`}
      >
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Uju Ayoku Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;


