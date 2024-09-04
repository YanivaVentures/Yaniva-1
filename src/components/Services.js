import React, { useState, useRef } from 'react';
import img from '../images/pre.svg'; 
import img2 from '../images/ipo.svg';
import img3 from '../images/ADV.svg';
import img4 from '../images/ma.svg';
import img5 from '../images/PR.svg';

const Services = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const services = [
        { img: img, title: "Pre-IPO", content: "Pre-IPO investment refers to the process of investing in a company before it goes public through an Initial Public Offering (IPO). This type of investment allows investors to buy shares at a potentially lower price than the public offering price." },
        { img: img2, title: "IPO Management", content: "IPO management involves overseeing the entire process of a company going public by offering its shares to the general public for the first time. It includes preparing the company for the IPO, conducting due diligence, and ensuring regulatory compliance." },
        { img: img3, title: "Financial Advisory", content: "Corporate financial advisory services offer businesses expert guidance on financial strategies, including mergers and acquisitions, capital raising, and restructuring. These advisors help companies optimize their financial structures, manage risks, and maximize shareholder value." },
        { img: img4, title: "Merger and Acquisition", content: "Mergers and acquisitions (M&A) consulting provides expert guidance to companies involved in buying, selling, or merging businesses. Consultants assist with strategy development, target identification, and valuation to ensure that deals align with the company's objectives." },
        { img: img5, title: "PR and Marketing", content: "PR and marketing consulting for an IPO involves crafting a strategic communication plan to build investor confidence and public interest ahead of the company's public offering. Consultants help shape the company's narrative, highlighting its strengths, growth potential, and market position." }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                </div>

                <div className="relative px-12" data-aos="fade-down" data-aos-delay="600">
                    {showLeftArrow && (
                        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10">
                            ←
                        </button>
                    )}
                    {showRightArrow && (
                        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full z-10">
                            →
                        </button>
                    )}
                    <div 
                        ref={scrollContainerRef} 
                        className="flex overflow-x-auto scrollbar-hide space-x-6 py-4"
                        onScroll={handleScroll}
                    >
                        {services.map((service, index) => (
                            <div key={index} className="bg-white flex-shrink-0 w-80 transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[500px] flex flex-col">
                                <div className="m-2 text-justify text-sm flex-grow">
                                    <div className="h-48 overflow-hidden mb-4">
                                        <img alt="card img" className="w-full h-full object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={service.img} />
                                    </div>
                                    <h2 className="font-semibold my-2 text-xl text-center">{service.title}</h2>
                                    <p className="text-sm font-medium line-clamp-6">{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;