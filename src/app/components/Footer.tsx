import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gradient-to-r from-[#0A0A0A] via-[#171717] to-[#0A0A0A] py-6 px-6 md:px-12 transition-colors duration-300">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 md:mb-0 transition-colors duration-300">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;