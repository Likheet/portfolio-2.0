'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useRef } from 'react';

// TabCard Component with Slow Fill Effect
const TabCard = ({ 
    href, 
    label, 
    number,
    colorClass,
    textColorClass = 'text-portfolio-text',
    className = ''
}: { 
    href: string; 
    label: string;
    number: string;
    colorClass: string;
    textColorClass?: string;
    className?: string;
}) => {
    return (
        <Link
            href={href}
            className={`
                group relative h-[120px] md:h-[160px] w-full md:w-[300px]
                ${colorClass} ${textColorClass}
                rounded-none rounded-br-[3rem] 
                p-6 flex flex-col justify-between 
                overflow-hidden
                shadow-lg hover:shadow-xl
                transition-shadow duration-300
                ${className}
            `}
        >
            {/* Slow Fill Overlay */}
            <div className="absolute inset-0 bg-[#2C2C2C] translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0 z-0" />

            {/* Content (Relative z-10 to stay on top) */}
            <span className="relative z-10 text-lg md:text-xl font-medium tracking-wide transition-colors duration-700 group-hover:text-white">
                {label}
            </span>
            <span className="relative z-10 text-lg md:text-xl font-medium self-end transition-colors duration-700 group-hover:text-white">
                {number}
            </span>
        </Link>
    );
};

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const surnameRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            // Initial Reveal
            const tl = gsap.timeline();

            tl.from('.nav-item', {
                y: -20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
            })
            .from('.hero-text', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: 'power4.out',
            }, '-=0.5')
            .from('.hero-sub', {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power2.out',
            }, '-=1')
            .from('.tab-card', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)',
            }, '-=0.5');

            // Mouse Move Effect for Typography
            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return;
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10
                const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10

                gsap.to(nameRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: 'power2.out',
                });

                gsap.to(surnameRef.current, {
                    x: -x, // Inverse movement
                    y: -y,
                    duration: 1,
                    ease: 'power2.out',
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        },
        { scope: containerRef }
    );

    return (
        <section
            className="relative bg-portfolio-bg text-portfolio-text min-h-screen flex flex-col justify-center items-center overflow-hidden cursor-default"
            id="banner"
            ref={containerRef}
        >
            {/* CORNER NAVIGATION */}
            <nav className="absolute inset-0 pointer-events-none p-8 md:p-16 flex flex-col justify-between z-50">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                    <div className="nav-item pointer-events-auto">
                        <span className="font-inter text-sm font-medium tracking-widest uppercase">Likheet.dev</span>
                    </div>
                    <div className="nav-item pointer-events-auto">
                        <Link href="#contact" className="font-inter text-sm font-medium tracking-widest uppercase hover:line-through transition-all">
                            Menu
                        </Link>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-end">
                    <div className="nav-item pointer-events-auto flex flex-col gap-1">
                        <span className="font-inter text-xs uppercase tracking-wider opacity-60">Located in</span>
                        <span className="font-inter text-sm font-medium uppercase">Bengaluru, IN</span>
                    </div>
                    <div className="nav-item pointer-events-auto">
                        <span className="font-inter text-xs uppercase tracking-wider opacity-60 animate-pulse">Scroll</span>
                    </div>
                </div>
            </nav>

            {/* CENTER HERO CONTENT */}
            <div className="relative z-10 w-full max-w-[85vw] h-[80vh] flex flex-col justify-center px-4 md:px-12">
                
                {/* ROW 1: NAME + PROJECTS CARD */}
                <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start mb-4 md:mb-0">
                    <div className="flex flex-col w-full md:w-auto z-10 mix-blend-difference">
                        <div className="flex justify-start items-center border-b border-portfolio-text/30 pb-2 mb-2 md:mb-4 w-full">
                            <span className="font-inter text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">
                                MS in IT(AI) at UNSW 2026
                            </span>
                        </div>
                        <h1 
                            ref={nameRef}
                            className="hero-text font-playfair italic font-normal text-[clamp(5rem,18vw,16rem)] leading-[0.8] tracking-tight text-portfolio-text"
                        >
                            Likheet
                        </h1>
                    </div>
                    
                    {/* Projects: Red (Floating Right of Name) */}
                    <div className="tab-card mt-8 md:mt-0 md:absolute md:top-[20%] md:right-[5%] lg:right-[5%] z-20">
                        <TabCard 
                            href="#selected-projects" 
                            label="Projects" 
                            number="01"
                            colorClass="bg-portfolio-red"
                            textColorClass="text-white"
                        />
                    </div>
                </div>

                {/* MIDDLE DECORATION */}
                <div className="hero-sub w-full flex justify-center items-center py-4 md:py-12 gap-4 md:gap-8 z-0">
                    <div className="h-[1px] w-12 md:w-24 bg-portfolio-text/30" />
                    <span className="font-inter text-xs md:text-sm uppercase tracking-[0.2em] text-portfolio-text/80">
                        Software Developer
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-portfolio-text/30" />
                </div>

                {/* ROW 2: SURNAME + MY WORKS CARD */}
                <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end">
                    
                    {/* My Works: Yellow (Floating Left of Surname) */}
                    <div className="tab-card mb-8 md:mb-0 md:absolute md:bottom-[20%] md:left-[5%] lg:left-[5%] z-20">
                        <TabCard 
                            href="#my-experience" 
                            label="My Works" 
                            number="02"
                            colorClass="bg-portfolio-yellow"
                            textColorClass="text-portfolio-text"
                        />
                    </div>

                    <h1 
                        ref={surnameRef}
                        className="hero-text font-inter font-light text-[clamp(5rem,18vw,16rem)] leading-[0.8] tracking-tighter text-portfolio-text z-10 mix-blend-difference"
                    >
                        Shetty
                    </h1>
                </div>

                {/* CONTACT CARD (Bottom Anchor) */}
                <div className="tab-card mt-8 md:mt-0 md:absolute md:bottom-[-5%] md:right-[20%] z-20 flex justify-center md:block w-full md:w-auto">
                    <TabCard 
                        href="#contact" 
                        label="Contact" 
                        number="03"
                        colorClass="bg-portfolio-cream"
                        textColorClass="text-portfolio-text"
                    />
                </div>

            </div>

            {/* BACKGROUND NOISE/TEXTURE */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
            />

        </section>
    );
};

export default Banner;
