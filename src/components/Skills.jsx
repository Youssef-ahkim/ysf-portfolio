import React from 'react';

export default function Skills() {
    const skills = [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Laravel",
        "Responsive Design",
        "Git & Version Control"
    ];

    return (
        <section className="skills-section w-full md:w-[60%] h-[60vh] flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 space-y-6">
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="nav-item-fade-up skill-item text-lg md:text-xl font-mono font-semibold text-white p-4 border border-gray-400 rounded-lg text-center shadow-md shadow-blue-500/50 transition-transform duration-300 hover:scale-105"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}
