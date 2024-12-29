"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image component



const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: 'About' },
        { label: 'Services', href: 'Services' },
        { label: 'Projects', href: 'Project' },
        { label: 'Contact', href: 'Contact' },
        
    ];

    return (
        <nav className="bg-white absolute dark:bg-gradient-to-r from-black via-[#06141B] to-black py-4 px-6 md:px-12 w-full z-10 top-0 transition-colors duration-300 "> {/* Added fixed positioning */}
            <div className="container mx-auto flex justify-between items-center"> {/* Use justify-between */}
                <Link href="/" className="flex items-center"> {/* Wrap logo and name in a flex container */}
                    <img className='w-24 h-24' src="2.png" alt="Logo" /> {/* Use Image component for logo */}
                    <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">Your Name</span> {/* Added site name */}
                </Link>

                <div className="hidden md:flex items-center space-x-6"> {/* Hide on smaller screens */}
                    {navItems.map((item) => (
                        <motion.div
                            key={item.label}
                            whileHover={{ scale: 1.1, y: -2 }} // Added slight vertical lift on hover
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 font-medium"> {/* Added font-medium */}
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 p-2 rounded-md"
                        >
                            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 dark:text-gray-400 focus:outline-none">
                        {isMobileMenuOpen ? <FaSun size={24} /> : <FaMoon size={24} />} {/* Toggle icon */}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-gradient-to-r from-[#9BA8AB] via-[#CCD0CF] to-[#9BA8AB] dark:bg-gray-900 absolute w-full left-0 top-full py-4 flex flex-col items-center"
                >
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className="py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 w-full text-center">
                            {item.label}
                        </Link>
                    ))}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className="mt-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 p-2 rounded-md"
                        >
                            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                        </button>
                    )}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;