'use client';
import React from 'react';
import { PUBLICATIONS } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';

const Research = () => {
    if (!PUBLICATIONS || PUBLICATIONS.length === 0) return null;

    return (
        <section id="research" className="py-24 sm:py-32 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-16">
                    <SectionTitle title="Research" />
                    <p className="text-muted-foreground -mt-8 ml-10">
                        Publications & Academic Work
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {PUBLICATIONS.map((pub, index) => (
                        <Link
                            key={index}
                            href={pub.url || '#'}
                            target="_blank"
                            className="group relative flex flex-col gap-6 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-secondary/15 backdrop-blur-sm"
                        >
                            {/* Year Badge */}
                            <div className="inline-flex items-center gap-3">
                                <span className="px-4 py-2 text-sm font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                                    {pub.year}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-anton text-foreground group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight uppercase">
                                {pub.title}
                            </h3>

                            {/* Description */}
                            {pub.description && (
                                <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 leading-relaxed max-w-4xl">
                                    {pub.description}
                                </p>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                {pub.sourceCode && (
                                    <Link
                                        href={pub.sourceCode}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                        className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background border-2 border-foreground font-anton text-base md:text-lg uppercase tracking-wider rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>View Code</span>
                                        <ArrowUpRight className="w-5 h-5 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
