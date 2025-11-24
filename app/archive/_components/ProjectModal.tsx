'use client';
import React, { useRef } from 'react';
import { IProject } from '@/types';
import { X, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import parse from 'html-react-parser';

interface ProjectModalProps {
    project: IProject;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';

                const tl = gsap.timeline();

                // 1. Container Slide Up
                tl.fromTo(
                    containerRef.current,
                    { y: '100%' },
                    { y: '0%', duration: 1, ease: 'power4.out' },
                )
                    // 2. Image Reveal (Scale Down)
                    .fromTo(
                        imageRef.current,
                        { scale: 1.2, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.2,
                            ease: 'power3.out',
                        },
                        '-=0.8',
                    )
                    // 3. Content Stagger
                    .fromTo(
                        contentRef.current?.children || [],
                        { y: 50, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power3.out',
                        },
                        '-=1',
                    );
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        { dependencies: [isOpen], scope: modalRef },
    );

    const handleClose = () => {
        const tl = gsap.timeline({
            onComplete: onClose,
        });

        tl.to(containerRef.current, {
            y: '100%',
            duration: 0.8,
            ease: 'power4.in',
        });
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[100] flex flex-col pointer-events-auto"
        >
            {/* Main Container (Full Screen Sheet) */}
            <div
                ref={containerRef}
                data-lenis-prevent="true"
                className="relative w-full h-full bg-background overflow-y-auto custom-scrollbar"
            >
                {/* Background Noise */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Header / Nav Area */}
                <div className="sticky top-0 z-50 flex justify-between items-start p-6 md:p-12 mix-blend-difference text-white pointer-events-none">
                    <div className="flex flex-col">
                        <span className="font-playfair italic text-xl md:text-2xl opacity-80">
                            Selected Work
                        </span>
                    </div>
                    <button
                        onClick={handleClose}
                        className="group flex items-center gap-2 text-sm font-anton uppercase tracking-widest hover:text-portfolio-red transition-colors pointer-events-auto"
                    >
                        <span>Close</span>
                        <div className="relative w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <X className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 px-6 md:px-12 pb-24 max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Left Column: Sticky Meta Info */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit flex flex-col gap-8 md:gap-12">
                            {/* Title */}
                            <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-foreground uppercase tracking-tight break-words">
                                {project.title}
                            </h1>

                            {/* Meta Grid */}
                            <div className="grid grid-cols-2 gap-6 font-mono text-sm text-muted-foreground border-t border-foreground/10 pt-6">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">
                                        Year
                                    </span>
                                    <span className="text-foreground">
                                        {project.year}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">
                                        Role
                                    </span>
                                    <span className="text-foreground">
                                        {project.role
                                            ? parse(project.role)
                                            : 'Developer'}
                                    </span>
                                </div>
                                {project.team_size && (
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">
                                            Team
                                        </span>
                                        <span className="text-foreground">
                                            {project.team_size}
                                        </span>
                                    </div>
                                )}
                                {project.duration && (
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">
                                            Duration
                                        </span>
                                        <span className="text-foreground">
                                            {project.duration}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Tech Stack */}
                            <div className="border-t border-foreground/10 pt-6">
                                <span className="block text-xs font-mono uppercase tracking-widest opacity-60 mb-4">
                                    Technologies
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-foreground/20 rounded-full text-muted-foreground hover:border-foreground/40 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col gap-3 pt-4">
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl!}
                                        target="_blank"
                                        className="group flex items-center justify-between px-6 py-4 bg-portfolio-red text-white font-anton text-lg uppercase tracking-wider rounded-lg hover:bg-red-600 transition-all"
                                    >
                                        <span>Visit Site</span>
                                        <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                                {project.sourceCode &&
                                    project.sourceCode !== '#' && (
                                        <Link
                                            href={project.sourceCode!}
                                            target="_blank"
                                            className="group flex items-center justify-between px-6 py-4 border border-foreground/20 text-foreground font-anton text-lg uppercase tracking-wider rounded-lg hover:bg-foreground hover:text-background transition-all"
                                        >
                                            <span>Source Code</span>
                                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </Link>
                                    )}
                            </div>
                        </div>

                        {/* Right Column: Scrollable Content */}
                        <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12 pt-8 lg:pt-0">
                            {/* Hero Image - Reduced Height */}
                            <div
                                ref={imageRef}
                                className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-secondary/5 shadow-2xl"
                            >
                                <Image
                                    src={
                                        project.longThumbnail ||
                                        project.thumbnail
                                    }
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Rich Content */}
                            <div
                                ref={contentRef}
                                className="flex flex-col gap-8 md:gap-12"
                            >
                                {/* Impact - Moved to Top for Recruiters */}
                                {project.impact && (
                                    <div className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-portfolio-red/10 border border-portfolio-red/20">
                                        <h3 className="font-anton text-2xl text-portfolio-red uppercase tracking-wide">
                                            Impact & Results
                                        </h3>
                                        <p className="font-inter text-lg md:text-xl text-foreground leading-relaxed font-medium">
                                            &quot;{project.impact}&quot;
                                        </p>
                                    </div>
                                )}

                                {/* Challenge & Solution Grid */}
                                {project.challenge || project.solution ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        {project.challenge && (
                                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-secondary/5 border border-white/5">
                                                <h3 className="font-playfair italic text-2xl text-foreground opacity-80">
                                                    The Challenge
                                                </h3>
                                                <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed">
                                                    {project.challenge}
                                                </p>
                                            </div>
                                        )}
                                        {project.solution && (
                                            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-secondary/5 border border-white/5">
                                                <h3 className="font-playfair italic text-2xl text-foreground opacity-80">
                                                    The Solution
                                                </h3>
                                                <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Fallback Description
                                    <div className="prose prose-invert prose-lg max-w-none font-light leading-relaxed text-muted-foreground">
                                        {parse(project.description)}
                                    </div>
                                )}

                                {/* Key Features */}
                                {project.key_features && (
                                    <div className="flex flex-col gap-6">
                                        <h3 className="font-anton text-2xl text-foreground uppercase tracking-wide opacity-80">
                                            Key Features
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.key_features.map(
                                                (feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors items-center"
                                                    >
                                                        <span className="font-mono text-portfolio-red text-lg">
                                                            {(i + 1)
                                                                .toString()
                                                                .padStart(
                                                                    2,
                                                                    '0',
                                                                )}
                                                        </span>
                                                        <span className="font-inter text-base text-foreground/90">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
