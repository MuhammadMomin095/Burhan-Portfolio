import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return(
        <div>
        

    <div className="bg-gradient-to-r from-[#4A5C6A] via-[#CCD0CF] to-[#4A5C6A] py-44">
        <Navbar />
        <div className="flex flex-col md:flex-row items-center mb-16 px-28 ">
    <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
        <img src="1.JPG" alt="Profile Picture" className="rounded-full w-96 h-full object-cover shadow-lg dark:shadow-[28px_28px_44px_#11212D]" />
    </div>
    <section className="md:w-2/3">
        <h2 className="text-5xl font-bold mb-6 text-gray-950">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Hi, I'm Muhammad Momin, a passionate front-end developer and UI designer based in [Your Location]. With a strong focus on creating seamless, user-centric digital experiences, I specialize in building responsive and visually stunning websites and web applications. My journey into development started with a desire to combine my creative design skills with the power of coding, and it has evolved into a career that allows me to constantly push the boundaries of what’s possible on the web.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Over the past [X] years, I have honed my skills in various technologies such as HTML, CSS, JavaScript, TypeScript, React, Next.js, and Node.js. I’ve developed a solid understanding of front-end development, ensuring that applications are not only functional but also engaging and intuitive. I am passionate about performance optimization, cross-browser compatibility, and accessibility, ensuring a smooth experience for users across all devices.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
            My expertise extends to UI design, where I use tools like Figma and Adobe XD to craft clean, modern, and user-friendly interfaces. I am deeply invested in the design system approach, ensuring consistency and scalability throughout the development process. I strongly believe that great design is not only about aesthetics but also about solving problems and enhancing usability.
        </p>
      
    </section>
</div>
</div>

<Footer />
    </div>

    );
};

export default About;