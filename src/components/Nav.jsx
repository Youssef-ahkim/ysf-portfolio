import React, { useState } from 'react';
import logo from '../img/logo.png';

export default function Nav({ onSectionChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="shadow-2xl w-[90%] mx-auto flex justify-between items-center p-4 bg-opacity-90 rounded-lg nav-fade-in relative z-10">
            {/* Logo */}
            <img src={logo} className="logo w-10 sm:w-12 logo-slide-in" alt="logo" />

            {/* Desktop Menu */}
            <ul className="hidden sm:flex items-center justify-around w-full max-w-lg text-white text-lg font-serif font-bold">
                {['Home', 'About', 'Skills', 'Projects'].map((section) => (
                    <button
                        key={section}
                        onClick={() => onSectionChange(section.toLowerCase())}
                        className="nav-item nav-item-fade-up hover:text-blue-400 transition duration-300"
                    >
                        {section}
                    </button>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
                className="sm:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="px-[10%] sm:hidden absolute right-[5%] top-16 w-[70%] bg-gray-900 bg-opacity-95 text-white text-lg font-serif font-bold flex flex-col items-center py-4 rounded-lg shadow-lg">
                    {['Home', 'About', 'Skills', 'Projects'].map((section) => (
                        <button
                            key={section}
                            onClick={() => { setIsMenuOpen(false); onSectionChange(section.toLowerCase()); }}
                            className=" nav-item nav-item-fade-up hover:text-blue-400 py-2 transition duration-300  text-center"
                        >
                            {section}
                        </button>
                    ))}
                </ul>
            )}

            {/* Hire Me Button */}
            <button
                onClick={() => window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=youssefahkim1234@gmail.com&su=Hire%20Me%20Request&body=Hello%20Youssef,%20I'm%20interested%20in%20working%20with%20you.",
                    "_blank"
                )}
                className="hire-button hidden sm:inline-block bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 duration-300"
            >
                Hire Me
            </button>
        </nav>
    );
}
