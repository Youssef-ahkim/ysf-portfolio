import React from 'react';
import img1 from '../img/logos/1.png';
import img2 from '../img/logos/2.png';
import img3 from '../img/logos/3.png';
import img4 from '../img/logos/4.png';
import img5 from '../img/logos/5.png';
import img6 from '../img/logos/6.png';

export default function Footer() {
    return (
        <footer className="footer footer-pop-up py-6 px-4 sm:px-8 lg:px-16 bg-gray-900 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-5">
            <div className="footer-item-fade-in flex justify-around items-center w-full sm:w-auto gap-6 sm:gap-8">
                {/* Experience Section */}
                <div className=" footer-item-fade-in flex flex-col items-center sm:flex-row gap-1 sm:gap-2 footer-item footer-item-fade-in">
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">1</span>
                    <span className="text-center sm:text-left text-xs sm:text-sm lg:text-lg text-white font-thin leading-snug">
                        Year of <br className="hidden sm:block" /> Experience
                    </span>
                </div>
                {/* Projects Section */}
                <div className="footer-item-fade-in flex flex-col items-center sm:flex-row gap-1 sm:gap-2 footer-item footer-item-fade-in">
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">5</span>
                    <span className="text-center sm:text-left text-xs sm:text-sm lg:text-lg text-white font-thin leading-snug">
                        Projects <br className="hidden sm:block" /> Completed
                    </span>
                </div>
            </div>

            {/* Logos Section */}
            <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 w-full sm:w-auto footer-item-fade-in">
                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`logo-${index + 1}`}
                        className="w-8 sm:w-10 md:w-12 lg:w-14 transition-transform duration-300 transform hover:scale-105"
                    />
                ))}
            </div>
        </footer>
    );
}
