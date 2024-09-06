import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import img from '/Users/ASHAPURA/Desktop/Yaniva/src/images/logo.svg';

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = React.useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-white shadow-lg' : ''}`}>
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <HashLink smooth to="/#hero">
                                <img 
                                    src={img}
                                    className="h-20 w-auto"  // Adjusted size of the logo
                                    alt="Logo"
                                />
                            </HashLink>
                        </div>
                        
                        <div className="hidden lg:flex items-center">
                            <NavLinks />
                        </div>
                        
                        <div className="lg:hidden">
                            <button className="p-2 rounded-lg text-blue-900" onClick={handleClick}>
                                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                    ) : (
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {isOpen && (
                        <div className="lg:hidden">
                            <div className="pt-2 pb-4">
                                <NavLinks />
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* This div adds spacing below the navbar to prevent content overlap */}
            <div style={{ marginTop: '80px' }}> 
            </div>
            {/* Add more content sections here */}
        </>
    );
};

export default NavBar;
