import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="bg-gray-100 py-12" id="portfolio">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl uppercase font-bold text-center mb-4"style={{ color: 'rgb(0, 153, 153)' }}>Portfolio</h2>
                <div className='flex justify-center mb-8'>
                <div className='w-24 border-b-4'
  style={{ borderBottomColor: 'rgb(0, 153, 153)' }}></div>
                    </div>
                </div>

                <div className="overflow-x-auto pb-8" data-aos="fade-down" data-aos-delay="600">
                    <div className="flex space-x-8 min-w-max px-4">
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:shadow-lg rounded-lg shadow-md p-6 w-80 flex-shrink-0">
                                <div className="text-justify h-full flex flex-col">
                                    <h4 className="font-semibold text-xl text-center mb-4">Project {item}</h4>
                                    <p className="text-md font-medium leading-6 mb-4 flex-grow">
                                        This is a sample project description. Replace this text with actual project details, highlighting key features, technologies used, and outcomes achieved.
                                    </p>
                                    <div className="flex justify-center mt-4">
                                        <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-md rounded-lg transition-colors duration-300">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
       
    );
}

export default Portfolio;