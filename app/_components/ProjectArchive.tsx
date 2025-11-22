"use client";
import React, { useState, useEffect } from 'react';
import { ARCHIVE_PROJECTS } from '@/lib/data';
import { X, ArrowUpRight, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ProjectArchive = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!ARCHIVE_PROJECTS || ARCHIVE_PROJECTS.length === 0) return null;

    return (
        <>
            {/* Trigger Button */}
            <div className="flex justify-center mt-12">
                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-white/5 hover:bg-secondary/20 hover:border-white/10 transition-all duration-300"
                >
                    <FolderOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">View Full Project Archive</span>
                </button>
            </div>

            {/* Drawer Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer Content */}
            <div
                className={cn(
                    "fixed top-0 right-0 z-[101] h-full w-full md:w-[600px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <h2 className="text-xl font-semibold text-foreground">Project Archive</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="grid gap-4">
                            {/* Table Header (Hidden on mobile) */}
                            <div className="hidden md:grid grid-cols-12 gap-4 pb-2 border-b border-white/5 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                <div className="col-span-2">Year</div>
                                <div className="col-span-4">Project</div>
                                <div className="col-span-4">Built With</div>
                                <div className="col-span-2 text-right">Link</div>
                            </div>

                            {/* Items */}
                            {ARCHIVE_PROJECTS.map((project, index) => (
                                <div
                                    key={index}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                    {/* Year */}
                                    <div className="md:col-span-2 text-sm text-muted-foreground font-mono">
                                        {project.year}
                                    </div>

                                    {/* Title */}
                                    <div className="md:col-span-4 font-medium text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="md:col-span-4 flex flex-wrap gap-1.5">
                                        {project.techStack.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-foreground/80"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-foreground/80">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Link */}
                                    <div className="md:col-span-2 flex md:justify-end items-center gap-2 mt-2 md:mt-0">
                                        {project.sourceCode && (
                                            <Link
                                                href={project.sourceCode}
                                                target="_blank"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectArchive;
