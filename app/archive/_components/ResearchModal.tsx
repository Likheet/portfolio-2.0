'use client';
import React, { useRef } from 'react';
import { IPublication } from '@/types';
import { X, ArrowUpRight, Quote, Github } from 'lucide-react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ResearchModalProps {
    publication: IPublication;
    isOpen: boolean;
    onClose: () => void;
}

const ResearchModal = ({
    publication,
    isOpen,
    onClose,
}: ResearchModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
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
                    // 2. Content Stagger
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
                        '-=0.5',
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
                            Research Paper
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
                <div className="relative z-10 px-6 md:px-12 pb-24 max-w-[1200px] mx-auto">
                    <div
                        ref={contentRef}
                        className="flex flex-col gap-16 md:gap-24"
                    >
                        {/* Header Section */}
                        <div className="flex flex-col gap-8 text-center items-center">
                            <div className="flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-muted-foreground">
                                <span>{publication.year}</span>
                            </div>
                            <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground uppercase tracking-tight max-w-4xl">
                                {publication.title}
                            </h1>

                            <div className="flex flex-wrap justify-center gap-4 mt-4">
                                {publication.url && publication.url !== '#' && (
                                    <Link
                                        href={publication.url}
                                        target="_blank"
                                        className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background font-anton text-lg uppercase tracking-wider rounded-full hover:bg-portfolio-red hover:text-white transition-all"
                                    >
                                        <span>Read Paper</span>
                                        <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                                {publication.sourceCode && (
                                    <Link
                                        href={publication.sourceCode}
                                        target="_blank"
                                        className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-anton text-lg uppercase tracking-wider rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Open Code</span>
                                        <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Abstract */}
                        <div className="relative p-8 md:p-16 bg-secondary/5 rounded-3xl border border-foreground/5">
                            <Quote className="absolute top-8 left-8 w-12 h-12 text-portfolio-red/20 rotate-180" />
                            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-6">
                                <h3 className="font-playfair italic text-3xl text-foreground">
                                    Abstract
                                </h3>
                                <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    {publication.abstract ||
                                        publication.description}
                                </p>
                            </div>
                        </div>

                        {/* Key Contributions */}
                        {publication.key_contributions && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2 text-center mb-4">
                                    <h3 className="font-anton text-3xl text-foreground uppercase tracking-wide">
                                        Key Contributions
                                    </h3>
                                </div>
                                {publication.key_contributions.map(
                                    (contribution, i) => (
                                        <div
                                            key={i}
                                            className="flex gap-6 p-8 rounded-2xl border border-foreground/10 hover:border-portfolio-red/50 transition-colors group"
                                        >
                                            <span className="font-mono text-4xl text-foreground/20 group-hover:text-portfolio-red transition-colors">
                                                {(i + 1)
                                                    .toString()
                                                    .padStart(2, '0')}
                                            </span>
                                            <p className="font-inter text-lg text-foreground/80 pt-2">
                                                {contribution}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        )}

                        {/* Methodology & Results Grid */}
                        {(publication.methodology || publication.results) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-12 border-t border-foreground/10">
                                {publication.methodology && (
                                    <div className="flex flex-col gap-6">
                                        <h3 className="font-playfair italic text-3xl text-foreground">
                                            Methodology
                                        </h3>
                                        <p className="font-inter text-muted-foreground leading-relaxed">
                                            {publication.methodology}
                                        </p>
                                    </div>
                                )}
                                {publication.results && (
                                    <div className="flex flex-col gap-6">
                                        <h3 className="font-playfair italic text-3xl text-foreground">
                                            Results
                                        </h3>
                                        <p className="font-inter text-muted-foreground leading-relaxed">
                                            {publication.results}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Citation */}
                        {publication.citation && (
                            <div className="flex flex-col gap-4 p-8 bg-secondary/10 rounded-xl font-mono text-sm text-muted-foreground break-all">
                                <span className="uppercase tracking-widest text-xs opacity-50">
                                    Citation
                                </span>
                                <p>{publication.citation}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchModal;
