'use client';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import {
    Trophy,
    Cloud,
    Beaker,
    Star,
    Medal,
    BarChart,
    Award,
    LucideIcon,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap: Record<string, LucideIcon> = {
    Trophy,
    Cloud,
    Beaker,
    Star,
    Medal,
    BarChart,
    Award,
};

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = gsap.utils.toArray<HTMLElement>('.achievement-item');

            items.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power3.out',
                });
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -100,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="container pb-section pt-10" id="achievements" ref={containerRef}>
            <SectionTitle title="Achievements" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
                {ACHIEVEMENTS.map((item, index) => {
                    const IconComponent = iconMap[item.icon] || Trophy;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "achievement-item group relative p-6 sm:p-8 border border-border/40 hover:border-portfolio-red/50 transition-colors duration-500 bg-background/50 backdrop-blur-sm",
                                "rounded-none"
                            )}
                        >
                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                <div className="flex justify-between items-start">
                                    <span className="text-portfolio-red/80 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-top-left flex-shrink-0">
                                        <IconComponent size={40} strokeWidth={1.5} />
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60 group-hover:text-portfolio-red/80 transition-colors border border-border/30 px-2 py-1 rounded">
                                        {item.category}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-medium font-anton leading-tight group-hover:text-portfolio-red transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Achievements;
