'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS, PUBLICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useMemo, useRef } from 'react';
import Project from './Project';
import { ArrowUpRight } from 'lucide-react';


import TransitionLink from '@/components/TransitionLink';

gsap.registerPlugin(ScrollTrigger, useGSAP);



const MyWork = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    // The home page shows the featured projects; the archive shows them all.
    const featuredProjects = useMemo(
        () =>
            PROJECTS.filter((project) => project.featured).sort(
                (a, b) => Number(b.year) - Number(a.year),
            ),
        [],
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="my-work">
            <div className="container">
                <SectionTitle title="MY WORK" />

                <div className="group/projects relative" ref={containerRef}>
                    <div className="flex flex-col gap-16" ref={projectListRef}>
                        {/* Research Papers Subsection */}
                        {PUBLICATIONS && PUBLICATIONS.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-medium text-muted-foreground">
                                        Research Papers
                                    </h3>
                                    <TransitionLink
                                        href="/archive?from=home"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        View All{' '}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </TransitionLink>
                                </div>
                                <div className="flex flex-col">
                                    {PUBLICATIONS.map((pub, index) => (
                                        <TransitionLink
                                            key={index}
                                            href={`/archive?publication=${pub.slug || index}&from=home`}
                                            className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all cursor-pointer w-full text-left block"
                                        >
                                            <div className="flex gap-2 md:gap-5">
                                                <div className="font-anton text-muted-foreground">
                                                    01.
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <h4 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl flex gap-4 font-anton leading-tight transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                                            {pub.title}
                                                            <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all">
                                                                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-sm font-medium">
                                                        <span>{pub.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TransitionLink>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Projects Subsection */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-medium text-muted-foreground">
                                    Projects
                                </h3>
                                <TransitionLink
                                    href="/archive?from=home"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    View All{' '}
                                    <ArrowUpRight className="w-4 h-4" />
                                </TransitionLink>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-14">
                                {featuredProjects.map((project, index) => (
                                    <Project
                                        index={index}
                                        project={project}
                                        key={project.slug}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-center mt-16">
                        <TransitionLink
                            href="/archive?from=home"
                            className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                        >
                            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                            <span className="z-[1] group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                                View All Works
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </TransitionLink>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default MyWork;
