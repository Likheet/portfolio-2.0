'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ARCHIVE_PROJECTS, PUBLICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ArchiveCard from './_components/ArchiveCard';
import ProjectModal from './_components/ProjectModal';
import { IProject } from '@/types';
import ScrambleText from '@/components/ScrambleText';

const ArchivePage = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useGSAP(
        () => {
            gsap.from('.animate-item', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            });
        },
        { scope: containerRef }
    );

    // Combine and sort projects by year descending
    const allProjects = [...PROJECTS, ...ARCHIVE_PROJECTS].sort((a, b) => {
        return Number(b.year) - Number(a.year);
    });

    const handleProjectClick = (project: IProject) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Small delay to clear selected project after animation
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <div className="min-h-screen bg-background py-20 px-4 sm:px-6 md:px-12 lg:px-24" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24 animate-item">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-anton mb-6 tracking-tight">
                        ALL WORKS
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A curated collection of my projects, experiments, and research endeavors. 
                        Click on any card to explore the details.
                    </p>
                </div>

                {/* Research Papers Section (Now First) */}
                {PUBLICATIONS && PUBLICATIONS.length > 0 && (
                    <div className="animate-item mb-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
                            <h2 className="text-4xl md:text-5xl font-bold font-anton tracking-wide cursor-default hover:text-primary transition-colors duration-300">
                                <ScrambleText text="RESEARCH" autoStart revealDelay={500} />
                            </h2>
                            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-1">
                                Academic Contributions
                            </p>
                        </div>
                        
                        <div className="grid gap-4">
                             <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/5 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 px-6">
                                <div className="col-span-1">Year</div>
                                <div className="col-span-7">Title</div>
                                <div className="col-span-3">Conference</div>
                                <div className="col-span-1 text-right">Link</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {PUBLICATIONS.map((pub, index) => (
                                    <div
                                        key={index}
                                        className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center p-6 md:p-6 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-all border border-white/5 hover:border-white/10"
                                    >
                                        <div className="md:col-span-1 text-sm text-primary font-mono mb-2 md:mb-0">
                                            {pub.year}
                                        </div>
                                        <div className="md:col-span-7 font-medium text-xl md:text-xl text-foreground group-hover:text-primary transition-colors mb-2 md:mb-0 font-anton tracking-wide">
                                            {pub.title}
                                        </div>
                                        <div className="md:col-span-3 text-sm text-muted-foreground mb-4 md:mb-0">
                                            {pub.conference}
                                        </div>
                                        <div className="md:col-span-1 flex md:justify-end items-center">
                                            {pub.url && pub.url !== '#' && (
                                                <Link
                                                    href={pub.url}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2 md:p-2 bg-white/5 md:bg-transparent rounded-full hover:bg-white/10"
                                                >
                                                    <span className="md:hidden">Read Paper</span>
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

                {/* Projects Grid (Now Second) */}
                <div className="w-full animate-item mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
                        <h2 className="text-4xl md:text-5xl font-bold font-anton tracking-wide cursor-default hover:text-primary transition-colors duration-300">
                            <ScrambleText text="SELECTED WORKS" autoStart revealDelay={800} />
                        </h2>
                        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-1">
                            Projects & Experiments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {allProjects.map((project, index) => (
                            <ArchiveCard 
                                key={index} 
                                project={project} 
                                index={index}
                                onClick={handleProjectClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default ArchivePage;
