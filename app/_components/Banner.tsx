'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useLenis } from 'lenis/react';

// TabCard Component with Slow Fill Effect
const TabCard = ({
    href,
    label,
    number,
    colorClass,
    textColorClass = 'text-portfolio-text',
    className = '',
}: {
    href: string;
    label: string;
    number: string;
    colorClass: string;
    textColorClass?: string;
    className?: string;
}) => {
    const lenis = useLenis();

    return (
        <Link
            href={href}
            onClick={(e) => {
                if (href.startsWith('#')) {
                    e.preventDefault();
                    lenis?.scrollTo(href);
                }
            }}
            className={`
                group relative h-[120px] md:h-[150px] w-full max-w-[350px] md:w-[380px]
                ${colorClass} ${textColorClass}
                rounded-none rounded-br-[3rem] 
                px-8 py-4 flex flex-col justify-end 
                overflow-hidden
                shadow-lg hover:shadow-xl
                transition-shadow duration-300
                ${className}
            `}
        >
            {/* Slow Fill Overlay */}
            <div className="absolute inset-0 bg-[#2C2C2C] translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0 z-0" />

            {/* Content (Relative z-10 to stay on top) */}
            <div className="relative z-10 flex justify-between items-end w-full">
                <span className="font-inter text-base font-medium tracking-wide transition-colors duration-700 group-hover:text-white">
                    {label}
                </span>
                <span className="font-inter text-base font-medium tracking-wide transition-colors duration-700 group-hover:text-white">
                    {number}
                </span>
            </div>
        </Link>
    );
};

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const surnameRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            // Single delayed fade-in for the whole banner
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 1.5, ease: 'power1.out' },
            );

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
            return () =>
                window.removeEventListener('mousemove', handleMouseMove);
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative bg-background text-foreground min-h-screen flex flex-col justify-center items-center overflow-hidden cursor-default"
            id="banner"
            ref={containerRef}
        >
            {/* CORNER NAVIGATION */}
            <nav className="absolute inset-0 pointer-events-none p-8 md:p-16 flex flex-col justify-between z-50">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                    <div className="nav-item pointer-events-auto">
                        <span className="font-inter text-sm font-medium tracking-widest uppercase">
                            Likheet.dev
                        </span>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-end">
                    <div className="nav-item pointer-events-auto flex flex-col gap-1">
                        <span className="font-inter text-xs uppercase tracking-wider opacity-60">
                            Located in
                        </span>
                        <span className="font-inter text-sm font-medium uppercase">
                            Bengaluru, IN
                        </span>
                    </div>
                    <div className="nav-item pointer-events-auto">
                        <span className="font-inter text-xs uppercase tracking-wider opacity-60 animate-pulse">
                            Scroll
                        </span>
                    </div>
                </div>
            </nav>

            {/* CENTER HERO CONTENT */}
            <div className="relative z-10 w-full max-w-[85vw] h-[80vh] flex flex-col justify-center px-4 md:px-12 -translate-y-[3.5rem] md:-translate-y-[4.5rem]">
                {/* ROW 1: NAME + PROJECTS CARD */}
                <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start mb-4 md:mb-0">
                    <div className="flex flex-col w-full md:w-auto z-10 mix-blend-difference">
                        <div className="flex justify-start items-center border-b border-foreground/30 pb-3 mb-4 md:mb-6 w-full -translate-y-[0.45rem] md:-translate-y-[0.6rem]">
                            <span className="font-inter text-xs md:text-sm font-medium uppercase tracking-[0.22em] opacity-90">
                                MS in IT(AI) at UNSW 2026
                            </span>
                        </div>
                        <h1
                            ref={nameRef}
                            className="hero-text font-playfair italic font-normal text-[clamp(5rem,18vw,16rem)] leading-[0.8] tracking-tight text-foreground"
                        >
                            Likheet
                        </h1>
                    </div>

                    {/* Projects: Red (Floating Right of Name) */}
                    <div className="tab-card mt-8 md:mt-0 md:absolute md:top-[10%] md:right-[11%] lg:right-[11%] z-20 relative">
                        <TabCard
                            href="#selected-projects"
                            label="Projects"
                            number="01"
                            colorClass="bg-portfolio-red"
                            textColorClass="text-white"
                        />
                        <Link
                            href="https://www.instagram.com/likheetshetty/"
                            target="_blank"
                            rel="noreferrer"
                            className="group absolute -right-16 md:-right-20 -bottom-3 font-inter text-[10px] uppercase tracking-[0.26em] text-foreground/60 overflow-hidden"
                        >
                            <span className="block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                Instagram
                            </span>
                            <span className="absolute left-0 top-full block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                Instagram
                            </span>
                        </Link>
                    </div>
                </div>

                {/* MIDDLE DECORATION */}
                <div className="hero-sub w-full flex justify-center items-center py-6 md:py-14 gap-6 md:gap-12 z-0">
                    <div className="h-[1px] w-12 md:w-24 bg-foreground/30" />
                    <span className="font-inter text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/80">
                        Software Developer
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-foreground/30" />
                </div>

                {/* ROW 2: SURNAME + MY WORKS CARD */}
                <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end">
                    {/* My Works: Yellow (Floating Left of Surname) */}
                    <div className="tab-card mb-8 md:mb-0 md:absolute md:bottom-[16%] md:left-[2%] lg:left-[2%] z-20 relative">
                        <TabCard
                            href="#my-experience"
                            label="My Works"
                            number="02"
                            colorClass="bg-portfolio-yellow"
                            textColorClass="text-portfolio-text"
                        />
                        <Link
                            href="https://github.com/Likheet"
                            target="_blank"
                            rel="noreferrer"
                            className="group absolute -left-16 md:-left-20 -bottom-3 font-inter text-[10px] uppercase tracking-[0.26em] text-foreground/60 overflow-hidden"
                        >
                            <span className="block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                GitHub
                            </span>
                            <span className="absolute left-0 top-full block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                GitHub
                            </span>
                        </Link>
                    </div>

                    <h1
                        ref={surnameRef}
                        className="hero-text font-bodoni font-normal text-[clamp(5rem,18vw,16rem)] leading-[0.8] tracking-[-0.03em] text-foreground z-10 mix-blend-difference"
                    >
                        Shetty
                    </h1>
                </div>

                {/* CONTACT CARD (Bottom Anchor) */}
                <div className="tab-card mt-8 md:mt-0 md:absolute md:bottom-[-10%] md:right-[25%] z-20 flex justify-center md:block w-full md:w-auto relative">
                    <TabCard
                        href="#contact"
                        label="Contact"
                        number="03"
                        colorClass="bg-portfolio-cream"
                        textColorClass="text-portfolio-text"
                    />
                    <Link
                        href="https://www.linkedin.com/in/likheet/"
                        target="_blank"
                        rel="noreferrer"
                        className="group absolute -right-16 md:-right-20 -bottom-3 font-inter text-[10px] uppercase tracking-[0.26em] text-foreground/60 overflow-hidden"
                    >
                        <span className="block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            LinkedIn
                        </span>
                        <span className="absolute left-0 top-full block translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            LinkedIn
                        </span>
                    </Link>
                </div>
            </div>

            {/* BACKGROUND NOISE/TEXTURE */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
            />
        </section>
    );
};

export default Banner;
