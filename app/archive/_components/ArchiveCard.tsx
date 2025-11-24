'use client';
import React from 'react';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface ArchiveCardProps {
    project: IProject;
    onClick: (project: IProject) => void;
    index: number;
}

const ArchiveCard = ({ project, onClick, index }: ArchiveCardProps) => {
    return (
        <div 
            onClick={() => onClick(project)}
            data-cursor-type="project"
            className="group relative w-full aspect-[4/5] md:aspect-[3/4] cursor-none overflow-hidden rounded-xl bg-secondary/10 border border-white/5 hover:border-white/20 transition-all duration-500"
        >
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-sm text-muted-foreground">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                </div>

                <div className="relative overflow-hidden">
                    {/* Default Title */}
                    <h3 className="text-4xl md:text-5xl font-anton font-bold text-foreground group-hover:opacity-0 transition-opacity duration-300">
                        {project.title}
                    </h3>

                    {/* Marquee Title on Hover */}
                    <div className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex whitespace-nowrap animate-marquee">
                            <span className="text-4xl md:text-5xl font-anton font-bold mr-8 text-foreground">
                                {project.title}
                            </span>
                            <span className="text-4xl md:text-5xl font-anton font-bold mr-8 text-stroke-2 text-fill-transparent text-foreground/20">
                                {project.title}
                            </span>
                            <span className="text-4xl md:text-5xl font-anton font-bold mr-8 text-foreground">
                                {project.title}
                            </span>
                            <span className="text-4xl md:text-5xl font-anton font-bold mr-8 text-stroke-2 text-fill-transparent text-foreground/20">
                                {project.title}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-muted-foreground/80 border border-white/10 px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default ArchiveCard;
