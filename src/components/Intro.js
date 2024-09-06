import React from 'react';
import img from '../images/secondpage.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl font-bold"style={{ color: 'rgb(0, 153, 153)' }}>Established in 2024, we've been leading the way in innovative financial solutions for the corporate sector.</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Core values and mission: Our mission is to foster business growth through tailored financial services, underpinned by our core values of integrity, excellence, and client-centricity.As we continue to grow and evolve, we remain committed to staying at the forefront of financial innovation. We invest heavily in research and development to enhance our service offerings and deliver even greater value to our clients. </p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;