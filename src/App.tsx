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
    description: "Sales teams waste hours manually researching prospects. This AI tool automates personalized cold email generation by analyzing job listings, helping services companies accelerate their sales pipeline with context-aware emails optimized for conversion.",
    imageUrl: "/assets/email_generator.PNG",
    details:
        ``,
    tags: ["LLM", "LangChain", "Llama 3.1", "Groqcloud", "ChromaDB", "Python", "Streamlit", "Sales Automation"],
    githubUrl: "https://github.com/UjuAyoku/cold-email-generator/tree/main",
    demoUrl: "https://cold-email-creator.streamlit.app/",
    videoUrl: "https://www.youtube.com/embed/bhx-rgOghAE?si=YjgT-PWo05v2kJLK",
  },
  {
    id: 2,
    title: "ARIA  - Audio Research & Intelligence Assistant",
    description: "Tired of spending hours on research? ARIA is a fully automated research assistant built with n8n that turns any topic into a downloadable podcast-style audio briefing.",
    imageUrl: "/assets/workflow-diagram.PNG",
    details:
      "It sources data from academic databases, summarizes findings, and handles content moderation to deliver safe audio reports directly to your inbox, while logging any policy violation.",
    tags: ["n8n", "AI Agent", "Research", "OpenAI API", "Perplexity AI", "OpenAI Moderation", "Google Sheets API", "Open AI Text-To-Speech", "Workflow Automation"],
    githubUrl: "https://github.com/UjuAyoku/ARIA/tree/main",
    demoUrl: "https://twinkle246.app.n8n.cloud/form/9aa26467-85a3-4d0e-aab2-d0962a11d1ea",
    videoUrl: "https://www.youtube.com/embed/HwIVyqfqG2Q?si=xWUxhOe12fV0BzOO",
  },
    {
    id: 3,
    title: "Customer Churn Predictor",
    description: "The Churn Predictor is a machine learning application that identifies customers at high risk of cancellation. By analyzing key factors like tenure, service type, and spending habits, it empowers businesses to proactively retain valuable customers with targeted outreach campaigns.",
    imageUrl: "/assets/customer_churn.PNG",
    details:
      "",
    tags: ["EDA", "Python", "Scikit-learn", "Pandas", "Numpy", "Flask",  "JavaScript", "Machine Learning", "Predictive Modeling", ],
    githubUrl: "https://github.com/UjuAyoku/churn-predictor",
    demoUrl: "https://github.com/UjuAyoku/churn-predictor",
    videoUrl: "https://www.youtube.com/embed/XrifV71Tc5c?si=LdI-Fj4tmbfoZEt1",
  },
  {
    id: 4,
    title: "SmartMoney",
    description: "This web app helps you make smarter financial decisions. By computing the interests for investments, loans, or mortgage before signing on, you can make informed decisions about your finances.",
    imageUrl: "/assets/smartmoney.PNG",
    details:
      "",
    tags: ["Python", "Flask", "Docker", "Tailwind CSS", "Google Cloud", "Railway", "Financial Technology"],
    githubUrl: "https://github.com/UjuAyoku/smart-money",
    demoUrl: "https://smartmoney-58502441680.europe-west1.run.app/",
    videoUrl: "",
  },
  {
    id: 5,
    title: "Resume Optimizer",
    description:
      "This app enables job seekers to create, analyze, and optimize their resumes for specific roles. It provides tailored suggestions for improvement and Applicant Tracking System (ATS) score to maximize interview chances.",
    imageUrl: "/assets/resume.PNG",
    details:
      "",
    tags: ["AI", "NLP", "LLM", "OpenAI", "Python", "API", "CSS", "Streamlit Cloud", "ATS Optimization", "Resume Parsing"],
    githubUrl: "https://github.com/UjuAyoku/resume-optimizer/tree/main",
    demoUrl: "https://resumeoptimizerpro.streamlit.app/",
    videoUrl: "",
  },
  {
    id: 6,
    title: "Data Visualization",
    description: "A collection of interactive dashboards and visualizations built in Tableau.",
    imageUrl: "/assets/viz.PNG",
    details:
      "This portfolio showcases my ability to transform raw data into compelling visual stories. The dashboards cover various domains and demonstrate skills in calculated fields, parameters, LOD expressions, and intuitive design to facilitate data-driven decision-making.",
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
      className={`min- ${
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
              isDarkMode ? "text-purple-300" : "text-purple-800"
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
            isDarkMode ? "text-purple-300" : "text-purple-800"
          } mb-4`}
        >
          Hi,
        </h2>
        <h3
          className={`text-xl ${
            isDarkMode ? "text-purple-300" : "text-purple-800"
          } mb-4`}
        >
          I'm Uju: Data Science Leader | AI Project Manager - welcome to my portfolio.
        </h3>
        <p  
          className={`text-xl text-justify ${
            isDarkMode ? "text-purple-200" : "text-purple-800"
          } mb-8`}
        >
          I build teams and ML solutions that deliver value. Explore my projects below to see my hands-on work in data science, AI, and end-to-end project execution.
          If you are in need of someone who bridges technical depth with people-oriented leadership, you are in the right place. 
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
            isDarkMode ? "text-purple-300" : "text-purple-800"
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
                    isDarkMode ? "text-purple-300" : "text-purple-800"
                  } mb-2`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-purple-200" : "text-purple-800"
                  } mb-4`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded-full"
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
                  isDarkMode ? "text-purple-300" : "text-purple-800"
                }`}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className={`${
                  isDarkMode
                    ? "text-purple-300 hover:text-purple-100"
                    : "text-purple-600 hover:text-purple-800"
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
              isDarkMode ? "text-purple-300" : "text-purple-800"
            } mb-8 text-center`}
          >
            About Me
          </h2>
          <div className="max-w-2xl mx-auto text-justify">
            <p
              className={`${
                isDarkMode ? "text-purple-200" : "text-purple-800"
              } mb-4`}
            >
              I'm a  people-first leader passionate about solving complex problems with high-performing teams through Data Science, Machine Learning, and Artificial Intelligence.
              <br/><br/>
              As a Data Scientist and Technical Project Leader with a Master's from Johns Hopkins, a Bachelor's in Electronics Engineering, and a unique cross-industry background (Oil & Gas, software, 
              telecom, and manufacturing) spanning multiple continents, I bridge the gap between deep technical skills and strategic execution. I leverage certifications in 
              project management (PMP, Agile - SAFe, CSM), change management (PROSCI), and IT governance (ITIL) to deliver complex, data-driven projects on time and within scope.
              <br/><br/>
              When I am not tracking emerging technologies, you can find me hiking the trails of Southern Alberta or teaching kids robotics. I believe the best solutions come from curiosity, 
              diverse perspectives, and teamwork.
              </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16">
        <h2
          className={`text-3xl font-bold ${
            isDarkMode ? "text-purple-300" : "text-purple-800"
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


