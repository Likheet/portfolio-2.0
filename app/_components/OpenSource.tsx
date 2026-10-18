'use client';
import SectionTitle from '@/components/SectionTitle';
import { OPEN_SOURCE } from '@/lib/data';
import { useRiseIn } from '@/lib/motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { useRef } from 'react';

const SHOWN_PRS = 3;

// Smaller star counts undersell a project, so they are left off.
const MIN_STARS_SHOWN = 1000;

// 27900 -> "27.9k", as GitHub writes it.
const formatStars = (stars: number) =>
    new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 1,
    })
        .format(stars)
        .toLowerCase();

const OpenSource = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useRiseIn(containerRef, '.open-source-item');

    return (
        <section className="py-section" id="open-source">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Open Source" />

                <div className="grid gap-10 md:gap-14">
                    {OPEN_SOURCE.map((item) => (
                        <div key={item.repo} className="open-source-item">
                            <p className="text-lg sm:text-xl text-muted-foreground">
                                {item.repo}
                            </p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3.5 mb-2.5">
                                <p className="text-4xl sm:text-5xl font-anton leading-none">
                                    {item.project}
                                </p>
                                {item.stars >= MIN_STARS_SHOWN && (
                                    <a
                                        href={`https://github.com/${item.repo}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${formatStars(item.stars)} stars on GitHub`}
                                        className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background-light/60 px-4 py-2 font-inter text-base sm:text-lg font-medium leading-none tabular-nums transition-colors hover:border-portfolio-yellow/60"
                                    >
                                        <Star
                                            size={18}
                                            className="fill-portfolio-yellow text-portfolio-yellow"
                                        />
                                        {formatStars(item.stars)}
                                    </a>
                                )}
                            </div>
                            <p className="text-lg text-muted-foreground">
                                {item.description}
                            </p>
                            <ul className="mt-5 space-y-2.5">
                                {item.pullRequests
                                    .slice(0, SHOWN_PRS)
                                    .map((pr) => (
                                        <li key={pr.url}>
                                            <a
                                                href={pr.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-start gap-2 text-base sm:text-lg hover:text-primary transition-colors"
                                            >
                                                <ArrowUpRight
                                                    size={18}
                                                    className="mt-1 shrink-0 text-primary"
                                                />
                                                {pr.title}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                            {item.pullRequests.length > SHOWN_PRS && (
                                <a
                                    href={item.mergedUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-3 text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors"
                                >
                                    See all {item.pullRequests.length} merged
                                    pull requests
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
