import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaMobileAlt, FaPalette, FaChartLine } from 'react-icons/fa';
import { FaHtml5, FaCss3, FaJsSquare ,FaReact   } from 'react-icons/fa';
import { div } from 'framer-motion/client';



const Services = () => {

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

    

    return(
        <div>
        

    <div className="bg-gradient-to-r from-[#4A5C6A] via-[#CCD0CF] to-[#4A5C6A]  py-44">
        <Navbar />

        <section className="mb-16 px-24">
    
    <h2 className="text-4xl font-bold mb-8">My Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
            <div
                key={index}
                
                className=" dark:shadow-[10px_10px_20px_#11212D] dark:bg-gradient-to-r from-[#06141B] via-[#11212D] to-[#06141B] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
                <div className="text-blue-500 mb-4 flex justify-center">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#06141B] dark:text-gray-200 mb-2 text-center transition-colors duration-300">{service.title}</h3>
                <p className="text-[#06141B] dark:text-gray-400 text-center transition-colors duration-300">{service.description}</p>
            </div>
        ))}
    
          </div>
           </section>
   

     {/* My Skills Section */}
     <section className="mb-16 py-10 px-24">
                 <h2 className="text-3xl font-bold mb-8">My Skills</h2>
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
</div>

<Footer />
    </div>

    );
};

export default Services;