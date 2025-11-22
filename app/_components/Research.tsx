"use client";
import React from 'react';
import { PUBLICATIONS } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Research = () => {
    if (!PUBLICATIONS || PUBLICATIONS.length === 0) return null;

    return (
        <section id="research" className="py-24 sm:py-32 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-16">
                    <SectionTitle
                        title="Research"
                    />
                    <p className="text-muted-foreground -mt-8 ml-10">Publications & Academic Work</p>
                </div>

                <div className="flex flex-col gap-8">
                    {PUBLICATIONS.map((pub, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 p-6 rounded-2xl bg-secondary/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-secondary/10"
                        >
                            {/* Year */}
                            <div className="text-sm font-mono text-muted-foreground min-w-[60px]">
                                {pub.year}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col gap-2">
                                <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                                    {pub.title}
                                </h3>
                                <div className="text-sm text-muted-foreground font-medium">
                                    {pub.conference}
                                </div>
                                {pub.description && (
                                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">
                                        {pub.description}
                                    </p>
                                )}
                            </div>

                            {/* Link */}
                            {pub.url && (
                                <div className="md:self-center">
                                    <Link
                                        href={pub.url}
                                        target="_blank"
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white group-hover:bg-primary group-hover:text-black transition-all duration-300"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
