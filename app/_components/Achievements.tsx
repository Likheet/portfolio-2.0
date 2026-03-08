'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
    ArrowUpRight,
    Award,
    BarChart,
    Beaker,
    Cloud,
    LucideIcon,
    Medal,
    Star,
    Trophy,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS } from '@/lib/data';
import TransitionLink from '@/components/TransitionLink';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
    Trophy,
    Cloud,
    Beaker,
    Star,
    Medal,
    BarChart,
    Award,
};

const HIGHLIGHT_COUNT = 4;

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const highlightedItems = ACHIEVEMENTS.slice(0, HIGHLIGHT_COUNT);

    useGSAP(
        () => {
            const highlightCards = gsap.utils.toArray<HTMLElement>(
                '.achievement-highlight-item',
            );

            highlightCards.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 28,
                    opacity: 0,
                    duration: 0.62,
                    delay: index * 0.05,
                    ease: 'power2.out',
                });
            });
        },
        {
            scope: containerRef,
        },
    );

    return (
        <section
            className="container pb-section pt-10 sm:pt-14"
            id="achievements"
            ref={containerRef}
        >
            <SectionTitle title="Achievements" />

            <div className="mt-8 sm:mt-10 flex items-start justify-between gap-5 flex-wrap">
                <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Highlighted certifications, rankings, and practical
                    milestones. Open the full archive for every credential.
                </p>

                {ACHIEVEMENTS.length > HIGHLIGHT_COUNT && (
                    <TransitionLink
                        href="/achievements?from=home"
                        className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors"
                    >
                        View All
                        <ArrowUpRight className="w-4 h-4" />
                    </TransitionLink>
                )}
            </div>

            <div className="mt-9 sm:mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-7">
                {highlightedItems.map((item) => {
                    const Icon = iconMap[item.icon] || Trophy;

                    return (
                        <article
                            key={`highlight-${item.title}-${item.year}`}
                            className="achievement-highlight-item group relative overflow-hidden border border-border/35 bg-background/45 p-6 sm:p-7 transition-colors duration-500 hover:border-portfolio-red/45"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-primary/14 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-portfolio-red/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="flex items-start gap-3 min-w-0">
                                        <span className="mt-0.5 text-portfolio-red/85 shrink-0">
                                            <Icon size={24} strokeWidth={1.7} />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                                                {item.category} / {item.year}
                                            </p>
                                            <h3 className="mt-1 text-xl sm:text-2xl font-anton uppercase leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <span className="text-[11px] uppercase tracking-[0.16em] border border-border/40 bg-background/70 px-2.5 py-1 text-portfolio-red whitespace-nowrap">
                                        {item.highlight}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={`highlight-${item.title}-${tag}`}
                                            className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground border border-border/35 px-2 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Achievements;
