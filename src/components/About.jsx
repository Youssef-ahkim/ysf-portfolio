import React from 'react';

export default function About() {
    return (
        <section className="  hero-section flex flex-col justify-center items-start min-h-[60vh] px-4 sm:px-8 lg:px-16 z-1 ">
            <div className="about-text max-w-full sm:max-w-[80%] lg:max-w-[50%] bg-gradient-to-br from-blue-900 via-blue-70000  text-white border border-white/30 p-6 rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-cyan-100">
                    Youssef Ahkim
                </h1>
                <p className="text-md sm:text-lg lg:text-xl font-light leading-relaxed text-justify text-gray-300">
                    I'm a dedicated web developer with a TS diploma in web development from OFPPT. I specialize in building responsive, user-centered websites and constantly explore new technologies to enhance my skills. My passion lies in crafting digital experiences that make a meaningful impact and elevate user interactions.
                </p>
            </div>
        </section>
    );
}
