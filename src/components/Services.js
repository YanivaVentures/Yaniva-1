import React from 'react';
import img from '../images/pre.svg'; 
import img2 from '../images/ipo.svg';
import img3 from '../images/ADV.svg';
import img4 from '../images/ma.svg';
import img5 from '../images/PR.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Pre-IPO</h2>
                                    <p className="text-md font-medium">
                                    Pre-IPO investment refers to the process of investing in a company before it goes public through an Initial Public Offering (IPO). This type of investment allows investors to buy shares at a potentially lower price than the public offering price. Pre-IPO investments are typically available to institutional investors, venture capitalists, and accredited investors. The appeal of pre-IPO investment lies in the potential for high returns.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">IPO Management</h2>
                                    <p className="text-md font-medium">
                                    IPO management involves overseeing the entire process of a company going public by offering its shares to the general public for the first time. It includes preparing the company for the IPO, conducting due diligence, and ensuring regulatory compliance with financial authorities like the SEBI. Key steps include selecting underwriters, setting the offer price, and marketing the IPO to potential investors.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Financial Advisory</h2>
                                    <p className="text-md font-medium">
                                    Corporate financial advisory services offer businesses expert guidance on financial strategies, including mergers and acquisitions, capital raising, and restructuring. These advisors help companies optimize their financial structures, manage risks, and maximize shareholder value. We provide crucial insights on business valuations, due diligence, and deal negotiations, ensuring informed decision-making. By aligning financial strategies with corporate goals, advisors play a key role in guiding companies through complex transactions like IPOs, debt financing, and major investments.  
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Merger and Aquisition</h2>
                                    <p className="text-md font-medium">
                                    Mergers and acquisitions (M&A) consulting provides expert guidance to companies involved in buying, selling, or merging businesses. Consultants assist with strategy development, target identification, and valuation to ensure that deals align with the company’s objectives. They conduct thorough due diligence, assess financial and operational risks, and help negotiate terms to maximize value for their clients. M&A consultants also manage the integration process post-transaction, ensuring a smooth transition and the realization of synergies. Their expertise is critical in navigating the complexities of M&A transactions, from initial planning to successful execution.
                                    </p>
                                </div>
                            </div> 

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">PR and Marketing</h2>
                                    <p className="text-md font-medium">
                                    PR and marketing consulting for an IPO involves crafting a strategic communication plan to build investor confidence and public interest ahead of the company's public offering. Consultants help shape the company’s narrative, highlighting its strengths, growth potential, and market position to attract potential investors. They manage media relations, create compelling messaging, and coordinate investor roadshows to generate buzz. Additionally, these consultants work to ensure regulatory compliance in all communications, minimizing risks while maximizing visibility. Effective PR and marketing strategies are essential for a successful IPO, helping to set the stage for a strong market debut.
                                    </p>
                                  </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold"> <span className='font-black'></span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold"> <span className='font-black'></span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;