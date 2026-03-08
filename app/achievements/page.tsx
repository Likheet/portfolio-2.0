'use client';

import React, { Suspense, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
    ArrowUpRight,
    Award,
    BarChart,
    Beaker,
    Cloud,
    Home,
    LucideIcon,
    Medal,
    Star,
    Trophy,
} from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';
import TransitionLink from '@/components/TransitionLink';
import { IAchievement } from '@/types';

const iconMap: Record<string, LucideIcon> = {
    Trophy,
    Cloud,
    Beaker,
    Star,
    Medal,
    BarChart,
    Award,
};

type FilterKey =
    | 'all'
    | 'cloud'
    | 'certification'
    | 'competitive'
    | 'learning';

const FILTERS: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'cloud', label: 'Cloud' },
    { key: 'certification', label: 'Certification' },
    { key: 'competitive', label: 'Competitive' },
    { key: 'learning', label: 'Learning' },
];

const normalizeText = (text: string) => text.toLowerCase();

const matchesFilter = (item: IAchievement, filter: FilterKey) => {
    if (filter === 'all') return true;

    const searchable = normalizeText(
        [
            item.title,
            item.category,
            item.description,
            item.highlight,
            ...item.tags,
        ].join(' '),
    );

    if (filter === 'cloud') {
        return /cloud|azure|gcp|google cloud|oci|oracle/.test(searchable);
    }

    if (filter === 'certification') {
        return /certification|certified|credential|associate|leader/.test(
            searchable,
        );
    }

    if (filter === 'competitive') {
        return /contest|competition|quiz|rank|leaderboard|competitive/.test(
            searchable,
        );
    }

    if (filter === 'learning') {
        return /learning|labs|onramp|hands-on|practice|milestone/.test(
            searchable,
        );
    }

    return true;
};

const AchievementsPageContent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const shouldGoBack = searchParams.get('from') === 'home';
    const homeHref = shouldGoBack ? '/#achievements' : '/';
    const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
    const filterCounts = useMemo<Record<FilterKey, number>>(
        () => ({
            all: ACHIEVEMENTS.length,
            cloud: ACHIEVEMENTS.filter((item) => matchesFilter(item, 'cloud'))
                .length,
            certification: ACHIEVEMENTS.filter((item) =>
                matchesFilter(item, 'certification'),
            ).length,
            competitive: ACHIEVEMENTS.filter((item) =>
                matchesFilter(item, 'competitive'),
            ).length,
            learning: ACHIEVEMENTS.filter((item) =>
                matchesFilter(item, 'learning'),
            ).length,
        }),
        [],
    );

    const filteredAchievements = useMemo(
        () =>
            ACHIEVEMENTS.filter((item) => matchesFilter(item, activeFilter)),
        [activeFilter],
    );

    useGSAP(
        () => {
            gsap.from('.achievement-archive-item', {
                y: 20,
                opacity: 0,
                duration: 0.65,
                stagger: 0.06,
                ease: 'power2.out',
            });
        },
        {
            scope: containerRef,
            dependencies: [activeFilter],
            revertOnUpdate: true,
        },
    );

    return (
        <div
            className="min-h-screen bg-background py-20 px-4 sm:px-6 md:px-12 lg:px-24"
            ref={containerRef}
        >
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-14 md:mb-16">
                    <div className="flex items-center gap-3 mb-8 text-sm font-medium font-manrope">
                        <TransitionLink
                            href={homeHref}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <div className="p-1.5 rounded-md bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                                <Home className="w-4 h-4" />
                            </div>
                            <span>Home</span>
                        </TransitionLink>

                        <span className="text-muted-foreground/40">/</span>
                        <span className="text-foreground bg-primary/10 px-2 py-1 rounded text-primary">
                            All Achievements
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-anton tracking-[0.05em] leading-[0.95] text-foreground">
                        ACHIEVEMENTS
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-foreground/74 max-w-4xl leading-relaxed">
                        Full record of certifications, rankings, and learning
                        milestones, with proof links where available.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-2.5">
                        {FILTERS.map((filter) => {
                            const isActive = activeFilter === filter.key;
                            return (
                                <button
                                    key={filter.key}
                                    type="button"
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={[
                                        'px-3.5 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.14em] border transition-colors',
                                        isActive
                                            ? 'border-portfolio-red/45 bg-portfolio-red/10 text-portfolio-red'
                                            : 'border-border/45 bg-background/65 text-foreground/70 hover:border-border/70',
                                    ].join(' ')}
                                >
                                    {filter.label} ({filterCounts[filter.key]})
                                </button>
                            );
                        })}

                        <span className="ml-1 text-[11px] uppercase tracking-[0.14em] text-foreground/58">
                            {filteredAchievements.length} shown
                        </span>
                    </div>
                </header>

                {filteredAchievements.length === 0 ? (
                    <div className="border border-border/35 bg-background/40 p-8 text-foreground/70">
                        No achievements match this filter yet.
                    </div>
                ) : (
                    <section className="space-y-5 md:space-y-6">
                        {filteredAchievements.map((item, index) => {
                            const Icon = iconMap[item.icon] || Trophy;
                            const hasProof = Boolean(item.proofUrl);
                            const cardClassName =
                                'achievement-archive-item group relative overflow-hidden border border-border/35 bg-background/38 p-6 sm:p-7 transition-colors duration-300 hover:border-border/55';

                            const cardBody = (
                                <>
                                    <div className="pointer-events-none absolute inset-0 bg-primary/18 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0" />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div className="min-w-0 flex items-start gap-3">
                                                <span className="mt-0.5 text-portfolio-red/90 shrink-0">
                                                    <Icon size={22} strokeWidth={1.7} />
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/60">
                                                        {item.category}
                                                    </p>

                                                    <h2 className="inline-flex items-center gap-2 mt-1 text-2xl sm:text-3xl font-anton leading-tight text-foreground transition-colors">
                                                        {item.title}
                                                        {hasProof && (
                                                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-80" />
                                                        )}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-2.5 flex-wrap justify-end">
                                                <span className="inline-flex items-center border border-portfolio-red/30 bg-portfolio-red/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-portfolio-red">
                                                    {item.highlight}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mt-5 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-5xl">
                                            {item.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={`${item.title}-${tag}`}
                                                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-foreground/68 border border-border/38 px-2.5 py-1"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );

                            return (
                                hasProof ? (
                                    <Link
                                        key={`${item.title}-${item.year}-${index}`}
                                        href={item.proofUrl!}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`${cardClassName} block cursor-pointer`}
                                    >
                                        {cardBody}
                                    </Link>
                                ) : (
                                    <article
                                        key={`${item.title}-${item.year}-${index}`}
                                        className={`${cardClassName} cursor-default`}
                                    >
                                        {cardBody}
                                    </article>
                                )
                            );
                        })}
                    </section>
                )}
            </div>
        </div>
    );
};

const AchievementsPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <AchievementsPageContent />
        </Suspense>
    );
};

export default AchievementsPage;
