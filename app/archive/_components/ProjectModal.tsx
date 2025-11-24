'use client';
import React, { useRef } from 'react';
import { IProject } from '@/types';
import { X, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
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
                    { y: '0%', duration: 1, ease: 'power4.out' }
                )
                // 2. Image Reveal (Scale Down)
                .fromTo(
                    imageRef.current,
                    { scale: 1.2, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
                    '-=0.8'
                )
                // 3. Content Stagger
                .fromTo(
                    contentRef.current?.children || [],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
                    '-=1'
                );

            } else {
                document.body.style.overflow = 'auto';
            }
        },
        { dependencies: [isOpen], scope: modalRef }
    );

    const handleClose = () => {
        const tl = gsap.timeline({
            onComplete: onClose
        });

        tl.to(containerRef.current, {
            y: '100%',
            duration: 0.8,
            ease: 'power4.in'
        });
    };

    if (!isOpen) return null;

    return (
        <div 
            ref={modalRef}
            className="fixed inset-0 z-[100] flex flex-col"
        >
            {/* Main Container (Full Screen Sheet) */}
            <div 
                ref={containerRef}
                className="relative w-full h-full bg-background overflow-y-auto custom-scrollbar"
            >
                {/* Background Noise */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Header / Nav Area */}
                <div className="sticky top-0 z-50 flex justify-between items-start p-6 md:p-12 mix-blend-difference text-white">
                    <div className="flex flex-col">
                        <span className="font-playfair italic text-xl md:text-2xl opacity-80">
                            Selected Work
                        </span>
                    </div>
                    <button 
                        onClick={handleClose}
                        data-hide-cursor="true"
                        className="group flex items-center gap-2 text-sm font-anton uppercase tracking-widest hover:text-portfolio-red transition-colors"
                    >
                        <span>Close</span>
                        <div className="relative w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <X className="w-4 h-4" />
                        </div>
                    </button>
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 px-6 md:px-12 pb-24 max-w-[1800px] mx-auto">
                    
                    {/* Title Section */}
                    <div ref={contentRef} className="mb-12 md:mb-20">
                        <h1 className="font-anton text-[15vw] md:text-[12vw] leading-[0.8] text-foreground uppercase tracking-tight break-words">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mt-6 md:mt-10">
                            {project.techStack.map((tech, i) => (
                                <span 
                                    key={i}
                                    className="px-4 py-2 text-sm font-mono uppercase tracking-wider border border-foreground/20 rounded-full text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        
                        {/* Left: Image */}
                        <div className="lg:col-span-7">
                            <div 
                                ref={imageRef}
                                className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-br-[5rem] md:rounded-br-[8rem] overflow-hidden bg-secondary/5"
                            >
                                <Image
                                    src={project.longThumbnail || project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-12">
                            
                            {/* Description */}
                            <div className="prose prose-invert prose-lg md:prose-xl max-w-none font-light leading-relaxed text-muted-foreground">
                                {parse(project.description)}
                            </div>

                            {/* Meta Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-foreground/10 border-b">
                                <div>
                                    <h3 className="font-anton text-lg mb-2 text-foreground">YEAR</h3>
                                    <p className="font-mono text-muted-foreground">{project.year}</p>
                                </div>
                                <div>
                                    <h3 className="font-anton text-lg mb-2 text-foreground">ROLE</h3>
                                    <div className="font-mono text-muted-foreground text-sm">
                                        {project.role ? parse(project.role) : 'Developer'}
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {project.liveUrl && (
                                    <Link 
                                        href={project.liveUrl}
                                        target="_blank"
                                        data-hide-cursor="true"
                                        className="flex-1 group flex items-center justify-center gap-3 px-8 py-6 bg-portfolio-red text-white font-anton text-xl uppercase tracking-wider rounded-none rounded-br-[2rem] hover:bg-red-600 transition-all"
                                    >
                                        <span>Visit Site</span>
                                        <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                                {project.sourceCode && project.sourceCode !== '#' && (
                                    <Link 
                                        href={project.sourceCode}
                                        target="_blank"
                                        data-hide-cursor="true"
                                        className={cn(
                                            "flex items-center justify-center gap-3 px-8 py-6 border border-foreground/20 text-foreground font-anton text-xl uppercase tracking-wider hover:bg-foreground hover:text-background transition-all rounded-none rounded-br-[2rem]",
                                            !project.liveUrl ? "flex-1" : ""
                                        )}
                                    >
                                        <Github className="w-6 h-6" />
                                        <span>Source Code</span>
                                    </Link>
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
