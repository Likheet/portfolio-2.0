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

const OPTION_THREE_HIGHLIGHT_COUNT = 4;

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const optionThreeItems = ACHIEVEMENTS.slice(0, OPTION_THREE_HIGHLIGHT_COUNT);

    useGSAP(
        () => {
            const items = gsap.utils.toArray<HTMLElement>('.achievement-item');
            const optionThreeItemsElements = gsap.utils.toArray<HTMLElement>(
                '.achievement-option-three-item',
            );

            items.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 36,
                    opacity: 0,
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: 'power3.out',
                });
            });

            optionThreeItemsElements.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 24,
                    opacity: 0,
                    duration: 0.58,
                    delay: index * 0.045,
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

            <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed -mt-3">
                Certifications, competitive rankings, and hands-on milestones
                that back up my project work.
            </p>

            <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:gap-14 mt-12 sm:mt-14 lg:mt-16">
                {ACHIEVEMENTS.map((item, index) => {
                    const Icon = iconMap[item.icon] || Trophy;

                    return (
                        <article
                            key={`${item.title}-${item.year}`}
                            className="achievement-item group relative pl-8 md:pl-0 border-l border-border/30 md:border-none"
                        >
                            <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                                <div className="hidden md:block md:col-span-3 text-right pt-2">
                                    <p className="font-anton text-5xl text-muted-foreground/20 leading-none tracking-wide group-hover:text-portfolio-red/55 transition-colors duration-500">
                                        {item.highlight}
                                    </p>
                                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
                                        {item.year}
                                    </p>
                                </div>

                                <div
                                    className={[
                                        'md:col-span-9',
                                        'border-b border-border/25',
                                        'pb-9',
                                        index === ACHIEVEMENTS.length - 1
                                            ? 'border-b-0 pb-0'
                                            : '',
                                    ].join(' ')}
                                >
                                    <div className="relative rounded-none border border-border/35 bg-background/35 p-5 sm:p-6 transition-colors duration-500 group-hover:border-portfolio-red/45">
                                        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between gap-3 flex-wrap">
                                                <div className="flex items-start gap-3 min-w-0">
                                                    <span className="mt-0.5 text-portfolio-red/85 shrink-0">
                                                        <Icon
                                                            size={28}
                                                            strokeWidth={1.6}
                                                        />
                                                    </span>
                                                    <div className="min-w-0">
                                                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                                                            {item.category}
                                                        </p>
                                                        <h3 className="text-2xl sm:text-3xl font-anton uppercase leading-tight mt-1">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <span className="md:hidden text-xs uppercase tracking-[0.16em] border border-border/40 bg-background/70 px-2.5 py-1 text-portfolio-red">
                                                    {item.highlight}
                                                </span>
                                            </div>

                                            <p className="mt-4 text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-3xl">
                                                {item.description}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={`${item.title}-${tag}`}
                                                        className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground border border-border/35 px-2 py-1"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="mt-20 sm:mt-24 lg:mt-28">
                <div className="flex items-center justify-between gap-4 mb-5">
                    <h3 className="text-2xl font-medium text-muted-foreground">
                        Highlighted Achievements
                    </h3>
                    {ACHIEVEMENTS.length > OPTION_THREE_HIGHLIGHT_COUNT && (
                        <TransitionLink
                            href="/achievements?from=home"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                            View All
                            <ArrowUpRight className="w-4 h-4" />
                        </TransitionLink>
                    )}
                </div>

                <p className="max-w-3xl text-sm sm:text-base text-muted-foreground/85 leading-relaxed">
                    A curated snapshot of key outcomes, with a full list
                    available when you want to browse every milestone.
                </p>

                <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-7">
                    {optionThreeItems.map((item) => {
                        const Icon = iconMap[item.icon] || Trophy;

                        return (
                            <article
                                key={`option-three-${item.title}-${item.year}`}
                                className="achievement-option-three-item group relative overflow-hidden border border-border/35 bg-background/45 p-6 sm:p-7 transition-colors duration-500 hover:border-portfolio-red/50"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-portfolio-red/6 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div className="flex items-start gap-3 min-w-0">
                                            <span className="mt-0.5 text-portfolio-red/85 shrink-0">
                                                <Icon
                                                    size={24}
                                                    strokeWidth={1.7}
                                                />
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
                                                key={`option-three-${item.title}-${tag}`}
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
            </div>
        </section>
    );
};

export default Achievements;
