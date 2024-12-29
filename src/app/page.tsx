"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { FaCode, FaMobileAlt, FaPalette, FaChartLine } from 'react-icons/fa';
import { FaHtml5, FaCss3, FaJsSquare ,FaReact   } from 'react-icons/fa';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const projects = [
        {
            title: "E-commerce Website",
            description: "Developed a fully functional e-commerce website using React, Node.js, and MongoDB. Implemented features like user authentication, product catalog, shopping cart, and payment gateway integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            github: "https://github.com/yourusername/ecommerce-website", // Replace with your repo link
        },
        {
            title: "Mobile App for Task Management",
            description: "Created a cross-platform mobile app using React Native for managing daily tasks. Features include task creation, scheduling, reminders, and progress tracking.",
            technologies: ["React Native", "Firebase", "Redux"],
            github: "https://github.com/yourusername/task-manager-app", // Replace with your repo link
        },
        {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },
    ];


    const services = [ 
    {
        icon: <FaCode size={48} />,
        title: "Web Development",
        description: "Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js.",
    },
    {
        icon: <FaMobileAlt size={48} />,
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications for iOS and Android using React Native.",
    },
    {
        icon: <FaPalette size={48} />,
        title: "UI/UX Design",
        description: "Designing intuitive and user-friendly interfaces with a focus on aesthetics and usability.",
    },
    {
        icon: <FaChartLine size={48} />,
        title: "Data Visualization",
        description: "Presenting complex data in a clear and engaging way using charts, graphs, and interactive dashboards.",
    },
];

    return (
      <div>
      <Navbar />
        <ThemeProvider attribute="class">
            <div className={`min-h-screen p-4 transition-colors duration-300 bg-gradient-to-r
            ${darkMode ? 'from-black via-[#06141B] to-black' : 'from-[#4A5C6A] via-[#CCD0CF] to-[#4A5C6A]'}
             text-${darkMode ? 'white' : 'black'} min-h-screen p-4 transition-colors duration-300`}> 
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto py-16 px-8" 
                >



                    <div className="mt-32 flex justify-between items-center mb-16"> {/* Increased margin bottom */}
                        <div>
                            <h1 className="text-4xl  font-bold mb-2">Muhammad Burhan</h1>
                            <p className="text-lg ">Software Developer | Web & Mobile Applications</p> {/* Added subtitle */}
                        </div>
                        <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-lg  dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-[#11212D] transition-colors duration-300"> 
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-16 py-10">
                        <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
                            <img src="1.JPG" alt="Profile Picture" className="roun w-96 h-full object-cover shadow-lg dark:shadow-[28px_28px_44px_#11212D]" /> 
                        </div>
                        <section className="md:w-2/3">
                            <h2 className="text-2xl font-bold mb-4">About Me</h2>
                            <p className="text-lg leading-relaxed">
                                I'm a passionate software developer with a focus on building robust and user-friendly web and mobile applications. I have experience in a variety of technologies, including React, React Native, Node.js, and more. I enjoy tackling challenging problems and finding creative solutions. I'm always eager to learn new things and expand my skillset. My goal is to create impactful software that makes a difference. I'm currently seeking new opportunities to collaborate on exciting projects.
                            </p>
                        </section>
                    </div>


                    <section className="mb-16 py-10">
    
        <h2 className="text-2xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    
                    className=" dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                    <div className="text-blue-500 mb-4 flex justify-center">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#06141B] dark:text-gray-200 mb-2 text-center transition-colors duration-300">{service.title}</h3>
                    <p className="text-[#06141B] dark:text-gray-400 text-center transition-colors duration-300">{service.description}</p>
                </motion.div>
            ))}
        
              </div>
               </section>



  {/* My Skills Section */}
                 <section className="mb-16 py-10">
                 <h2 className="text-2xl font-bold mt-16 mb-8">My Skills</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Replace these skills with your own */}
                    <div className="text-center h-36  dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B]">
      <FaHtml5 size={32} className="text-blue-500 mb-2" />
      <p className="text-base font-medium text-gray-700 dark:text-gray-200">HTML5</p>
    </div>
    <div className="text-center  dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B]">
      <FaCss3 size={32} className="text-blue-500 mb-2" />
      <p className="text-base font-medium text-gray-700 dark:text-gray-200">CSS3</p>
    </div>
    <div className="text-center   dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B]">
      <FaJsSquare size={32} className="text-blue-500 mb-2" />
      <p className="text-base font-medium text-gray-700 dark:text-gray-200">JavaScript</p>
    </div>
    <div className="text-center  dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B]">
      <FaReact size={32} className="text-blue-500 mb-2 " />
      <p className="text-base font-medium text-gray-700 dark:text-gray-200">React</p>
    </div>
    {/* Add more skills here */}
  </div>
</section>


                    <section className="mb-16 py-10">
                        <h2 className="text-2xl font-bold mb-8">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Added lg breakpoint */}
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }} // Added box-shadow on hover
                                    className=" dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B]  p-6 rounded-lg  transition-transform duration-300"
                                >
                                    <h3 className="text-xl dark:text-gray-200 font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                      {project.technologies.map((tech, index) => (
                                        <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm">{tech}</span>
                                      ))}
                                    </div>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View on GitHub</a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>



                    <section className="mb-16 py-10">
  <h2 className="text-2xl font-bold mb-8">Contact</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
    >
      <FaGithub size={32} className="mr-2" />
      <span>Find me on GitHub</span>
    </a>

    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
    >
      <FaLinkedin size={32} className="mr-2" />
      <span>Connect with me on LinkedIn</span>
    </a>

    <a
      href="mailto:your.email@example.com"
      className="text-slate-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
    >
      <FaEnvelope size={32} className="mr-2" />
      <span>Send me an Email</span>
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-600 hover:text-blue-500 transition-colors duration-300 flex items-center"
    >
      <FaFilePdf size={32} className="mr-2" />
      <span>Download my Resume</span>
    </a>
  </div>
</section>


                </motion.div>
            </div>
        </ThemeProvider>
        <Footer />
        </div>
    );
}