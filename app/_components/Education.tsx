"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/SectionTitle';
import { MY_EDUCATION } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = gsap.utils.toArray<HTMLElement>('.education-item');

            items.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power3.out',
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <section className="container py-section" id="education" ref={containerRef}>
            <SectionTitle title="Education" />

            <div className="grid grid-cols-1 gap-16 mt-16">
                {MY_EDUCATION.map((edu, index) => (
                    <div
                        key={index}
                        className="education-item group relative pl-8 md:pl-0 border-l border-border/30 md:border-none"
                    >
                        <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                            {/* Year - Left Side on Desktop */}
                            <div className="hidden md:block md:col-span-3 text-right pt-2">
                                <span className="text-5xl font-anton text-muted-foreground/20 group-hover:text-portfolio-red/50 transition-colors duration-500">
                                    {edu.duration}
                                </span>
                            </div>

                            {/* Content - Right Side */}
                            <div className="md:col-span-9 space-y-4">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-3xl md:text-4xl font-anton uppercase tracking-wide">
                                        {edu.degree}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-light text-muted-foreground">
                                        <span>{edu.institution}</span>
                                        <span className="hidden md:inline w-1 h-1 bg-portfolio-red rounded-full" />
                                        <span>{edu.location}</span>
                                        {/* Mobile Year */}
                                        <span className="md:hidden text-portfolio-red font-medium">
                                            {edu.duration}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                    <p className="text-lg text-muted-foreground/80 font-light leading-relaxed max-w-2xl">
                                        {edu.description}
                                    </p>
                                    
                                    {/* Score Badge */}
                                    {edu.score && (
                                        <div className="px-4 py-2 border border-border/50 rounded-full bg-background/50 backdrop-blur-sm whitespace-nowrap">
                                            <span className="font-inter text-sm font-medium tracking-wide">
                                                {edu.score}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
