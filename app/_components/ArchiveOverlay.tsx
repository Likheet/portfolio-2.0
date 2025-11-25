'use client';
import React, { useState, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ARCHIVE_PROJECTS, PUBLICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ArchiveCard from '../archive/_components/ArchiveCard';
import ProjectModal from '../archive/_components/ProjectModal';
import ResearchModal from '../archive/_components/ResearchModal';
import { IProject, IPublication } from '@/types';
import { useLenis } from 'lenis/react';
import { cn } from '@/lib/utils';
import ScrambleText from '@/components/ScrambleText';

interface ArchiveOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const ArchiveOverlay = ({ isOpen, onClose }: ArchiveOverlayProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(
        null,
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPublication, setSelectedPublication] =
        useState<IPublication | null>(null);
    const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
    const lenis = useLenis();

    useGSAP(
        () => {
            if (isOpen) {
                lenis?.stop();
                document.body.style.overflow = 'hidden';

                // Reset scroll position
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTop = 0;
                }

                const tl = gsap.timeline();

                tl.to(containerRef.current, {
                    y: '0%',
                    duration: 0.8,
                    ease: 'power4.out',
                }).fromTo(
                    '.animate-archive-item',
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.04,
                        ease: 'power2.out',
                    },
                    '-=0.4',
                );
            } else {
                lenis?.start();
                document.body.style.overflow = 'auto';

                gsap.to(containerRef.current, {
                    y: '100%',
                    duration: 0.5,
                    ease: 'power3.in',
                });
            }
        },
        { dependencies: [isOpen, lenis], scope: containerRef },
    );

    const handleScroll = () => {
        if (!scrollContainerRef.current || !thumbRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } =
            scrollContainerRef.current;

        // Update scroll indicator
        const progress = scrollTop / (scrollHeight - clientHeight);
        const thumbHeight = Math.max(
            (clientHeight / scrollHeight) * clientHeight,
            40,
        );
        const maxTranslate = clientHeight * 0.8 - thumbHeight;

        thumbRef.current.style.height = `${thumbHeight}px`;
        thumbRef.current.style.transform = `translateY(${
            progress * maxTranslate
        }px)`;
    };

    // Initial thumb height calculation
    React.useEffect(() => {
        if (scrollContainerRef.current && thumbRef.current) {
            const { scrollHeight, clientHeight } = scrollContainerRef.current;
            const height = Math.max(
                (clientHeight / scrollHeight) * clientHeight,
                40,
            );
            thumbRef.current.style.height = `${height}px`;
        }
    }, [isOpen]);

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
        setTimeout(() => setSelectedProject(null), 300);
    };

    const handlePublicationClick = (pub: IPublication) => {
        setSelectedPublication(pub);
        setIsResearchModalOpen(true);
    };

    const handleCloseResearchModal = () => {
        setIsResearchModalOpen(false);
        setTimeout(() => setSelectedPublication(null), 300);
    };

    return (
        <>
            <div className="fixed inset-0 z-[90] flex items-end justify-center pointer-events-none">
                {/* Backdrop */}
                <div
                    className={cn(
                        'absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-500',
                        isOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none',
                    )}
                    onClick={onClose}
                />

                {/* Main Container (Sheet) */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[95vh] bg-background rounded-t-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto translate-y-full flex flex-col will-change-transform"
                >
                    {/* Background Noise */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                        }}
                    />

                    {/* Custom Scroll Indicator */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 h-[80%] w-1 bg-foreground/5 rounded-full z-50 pointer-events-none mix-blend-difference">
                        <div
                            ref={thumbRef}
                            className="w-full bg-[#00ff00] rounded-full transition-transform duration-75 ease-out shadow-[0_0_10px_#00ff00]"
                        />
                    </div>

                    {/* Scrollable Content Wrapper */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        data-lenis-prevent="true"
                        className="flex-1 overflow-y-auto custom-scrollbar relative z-10"
                    >
                        <div className="max-w-[1600px] mx-auto py-12 px-6 md:px-12 lg:px-20">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-16 md:mb-24 animate-archive-item">
                                <div>
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-anton mb-6 tracking-tight uppercase">
                                        All Works
                                    </h1>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                        A curated collection of my projects,
                                        experiments, and research endeavors.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="group flex items-center gap-2 text-sm font-anton uppercase tracking-widest hover:text-portfolio-red transition-colors mt-4"
                                >
                                    <span>Close</span>
                                    <div className="relative w-10 h-10 border border-current rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                                        <X className="w-5 h-5" />
                                    </div>
                                </button>
                            </div>

                            {/* Research Papers Section */}
                            {PUBLICATIONS && PUBLICATIONS.length > 0 && (
                                <div className="animate-archive-item mb-24">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
                                        <h2 className="text-4xl md:text-5xl font-bold font-anton tracking-wide cursor-default hover:text-primary transition-colors duration-300">
                                            <ScrambleText
                                                text="RESEARCH"
                                                autoStart
                                                revealDelay={500}
                                            />
                                        </h2>
                                        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest mb-1">
                                            Academic Contributions
                                        </p>
                                    </div>

                                    <div className="grid gap-4">
                                        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 px-6">
                                            <div className="col-span-1">
                                                Year
                                            </div>
                                            <div className="col-span-10">
                                                Title
                                            </div>
                                            <div className="col-span-1 text-right">
                                                Link
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            {PUBLICATIONS.map((pub, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() =>
                                                        handlePublicationClick(
                                                            pub,
                                                        )
                                                    }
                                                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center p-6 md:p-6 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-all border border-border hover:border-border/80 cursor-pointer"
                                                >
                                                    <div className="md:col-span-1 text-sm text-primary font-mono mb-2 md:mb-0">
                                                        {pub.year}
                                                    </div>
                                                    <div className="md:col-span-10 font-medium text-xl md:text-xl text-foreground group-hover:text-primary transition-colors mb-2 md:mb-0 font-anton tracking-wide">
                                                        {pub.title}
                                                    </div>
                                                    <div className="md:col-span-1 flex md:justify-end items-center">
                                                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                                            <ArrowUpRight className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Projects Grid */}
                            <div className="w-full animate-archive-item mb-32">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
                                    <h2 className="text-4xl md:text-5xl font-bold font-anton tracking-wide cursor-default hover:text-primary transition-colors duration-300">
                                        <ScrambleText
                                            text="SELECTED WORKS"
                                            autoStart
                                            revealDelay={800}
                                        />
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
                    </div>
                </div>
            </div>

            {/* Project Detail Modal (Nested Overlay) */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject!}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}

            {/* Research Detail Modal */}
            {selectedPublication && (
                <ResearchModal
                    publication={selectedPublication!}
                    isOpen={isResearchModalOpen}
                    onClose={handleCloseResearchModal}
                />
            )}
        </>
    );
};

export default ArchiveOverlay;
