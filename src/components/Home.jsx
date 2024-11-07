// Home.js
import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export default function Home() {
    const [currentSection, setCurrentSection] = useState('home');

    const handleSectionChange = (section) => {
        setCurrentSection(section);
    };

    return (
        <div className="home w-full h-full flex flex-col justify-between bg-move">
            <div className='flex items-center justify-center mt-[1%]'>
                <Nav onSectionChange={handleSectionChange} />
            </div>
            {currentSection === 'home' && (
                <section className="hero-section w-auto h-[50vh] flex flex-col justify-center items-start ml-[5%]">
                    <span className="hero-item sub-text text-white text-3xl font-mono mt-4 sub-text-fade-in">Hello,</span>
                    <span className="hero-item title-text title-text-fade-in text-7xl font-serif font-bold text-blue-200 mt-4">
                        I'M A WEB <br /> DEVELOPER
                    </span>
                    <span className="hero-item sub-text text-white text-3xl font-mono mt-4 sub-text-fade-in">I build websites</span>
                </section>
            )}
            {currentSection === 'about' && <About />}
            {currentSection === 'skills' && <Skills />}
            {currentSection === 'projects' && <Projects />}
            <Footer />
        </div>
    );
}
