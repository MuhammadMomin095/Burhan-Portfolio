"use client";

import Navbar from '../components/Navbar';
import { useState, ChangeEvent, FormEvent } from 'react';
import Footer from '../components/Footer';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Explicitly type the event
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => { // Explicitly type the event
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: '', email: '', message: '' });
        alert("Message sent successfully!");
    };

    return (
        <div>
        <div className="bg-gradient-to-r from-[#06141B] via-[#CCD0CF] to-[#06141B] min-h-screen flex flex-col  py-44"> {/* Added min-h-screen and flex for better layout */}
            <Navbar />

            <main className="flex-grow px-6 container mx-auto"> {/* Added main and container for better structure and responsiveness */}
                <section className="contact-section">
                    <h2 className="text-5xl font-bold text-center mb-8 text-gray-950">Get In Touch</h2> {/* Improved text color */}

                    <div className="max-w-md mx-auto bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] p-8 rounded-lg shadow-md"> {/* Added background, padding, rounded corners, and shadow */}
                        <form className="space-y-6" onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-300">Name</label> {/* Added font-medium and improved text color */}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-4 p-3 border bg-white rounded-md focus:ring focus:ring-blue-300" // Added focus styles
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-4 p-3 border bg-white rounded-md focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border mt-4 bg-white rounded-md focus:ring focus:ring-blue-300 resize-y" // Added resize-y
                                    rows={4}
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"> {/* Improved button styles */}
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;