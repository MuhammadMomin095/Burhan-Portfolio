import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Project = () => {
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
        {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },   {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },   {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },   {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },   {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },   {
            title: "Data Visualization Dashboard",
            description: "Built an interactive data visualization dashboard using D3.js to analyze and present complex datasets. Implemented features like charts, graphs, and interactive filters.",
            technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/data-visualization-dashboard", // Replace with your repo link
        },
    ];

    return (
        <div>
        <div className='bg-gradient-to-r from-[#4A5C6A] via-[#CCD0CF] to-[#4A5C6A]  py-44'>
            <Navbar />

            <section className="mb-16  mt-20 px-24 bg-gradient-to-r from-[#4A5C6A] via-[#CCD0CF] to-[#4A5C6A]">
                <h2 className="text-5xl font-bold text-center mb-8 text-gray-950">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                          
                            className="shadow-[10px_10px_20px_#11212D] bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] p-6 rounded-lg transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                            <p className=" text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className=" bg-gray-700  text-gray-300 px-2 py-1 rounded-md text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 font-semibold"
                                >
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

           
        </div>
        <Footer />
        </div>
    );
};

export default Project;
