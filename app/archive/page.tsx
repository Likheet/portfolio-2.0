'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ARCHIVE_PROJECTS, PUBLICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ArchivePage = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.animate-item', {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out',
            });
        },
        { scope: containerRef }
    );

    // Combine and sort projects by year descending
    const allProjects = [...PROJECTS, ...ARCHIVE_PROJECTS].sort((a, b) => {
        return Number(b.year) - Number(a.year);
    });

    return (
        <div className="min-h-screen bg-background py-20 px-6 md:px-12 lg:px-24" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 animate-item">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold font-anton mb-4">
                        Archive
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A complete list of things I&apos;ve worked on, including projects, experiments, and research.
                    </p>
                </div>

                {/* Projects Table */}
                <div className="w-full animate-item">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                        <div className="col-span-1">Year</div>
                        <div className="col-span-3">Project</div>
                        <div className="col-span-5">Built With</div>
                        <div className="col-span-2">Made at</div>
                        <div className="col-span-1 text-right">Link</div>
                    </div>

                    {/* Table Body */}
                    <div className="flex flex-col gap-2">
                        {allProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                            >
                                {/* Year */}
                                <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                                    {project.year}
                                </div>

                                {/* Title */}
                                <div className="md:col-span-3 font-medium text-lg md:text-base text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </div>

                                {/* Tech Stack */}
                                <div className="md:col-span-5 flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full bg-secondary/30 text-secondary-foreground/90 border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Made at / Role (using Role as Made at for now or just Role) */}
                                <div className="md:col-span-2 text-sm text-muted-foreground">
                                    {/* Extracting plain text from HTML role if possible, or just showing a placeholder if complex */}
                                    {/* Since role is HTML string in data, let's just show "Personal" or "Company" if we had that data. 
                                        For now let's use a simple check or just leave it blank/custom.
                                        Actually, let's display the 'role' if it's simple, but the data has HTML.
                                        Let's skip this column or put something else. 
                                        The reference design usually has "Made at". 
                                        I'll leave it as "-" for now or try to infer.
                                    */}
                                    <span className="hidden md:block">-</span>
                                </div>

                                {/* Link */}
                                <div className="md:col-span-1 flex md:justify-end items-center gap-2 mt-2 md:mt-0">
                                    {project.sourceCode && project.sourceCode !== '#' && (
                                        <Link
                                            href={project.sourceCode}
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                                            title="Source Code"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    )}
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                                            title="Live Demo"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Publications Section (Optional, if we want to include it) */}
                {PUBLICATIONS && PUBLICATIONS.length > 0 && (
                    <div className="mt-24 animate-item">
                        <h2 className="text-2xl font-bold font-anton mb-8">Research Publications</h2>
                        <div className="w-full">
                             <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                                <div className="col-span-1">Year</div>
                                <div className="col-span-6">Title</div>
                                <div className="col-span-4">Conference</div>
                                <div className="col-span-1 text-right">Link</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                {PUBLICATIONS.map((pub, index) => (
                                    <div
                                        key={index}
                                        className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                                    >
                                        <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                                            {pub.year}
                                        </div>
                                        <div className="md:col-span-6 font-medium text-lg md:text-base text-foreground group-hover:text-primary transition-colors">
                                            {pub.title}
                                        </div>
                                        <div className="md:col-span-4 text-sm text-muted-foreground">
                                            {pub.conference}
                                        </div>
                                        <div className="md:col-span-1 flex md:justify-end items-center">
                                            {pub.url && pub.url !== '#' && (
                                                <Link
                                                    href={pub.url}
                                                    target="_blank"
                                                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                                                >
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArchivePage;
