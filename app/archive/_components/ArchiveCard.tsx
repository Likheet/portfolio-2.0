'use client';
import React, { useRef } from 'react';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ArchiveCardProps {
    project: IProject;
    onClick: (project: IProject) => void;
    index: number;
}

const COLORS = [
    { bg: 'bg-portfolio-cream', text: 'text-portfolio-text', muted: 'text-portfolio-text/60', border: 'border-portfolio-text/10', hoverBorder: 'hover:border-portfolio-text/30' },
    { bg: 'bg-portfolio-red', text: 'text-portfolio-cream', muted: 'text-portfolio-cream/60', border: 'border-portfolio-cream/10', hoverBorder: 'hover:border-portfolio-cream/30' },
    { bg: 'bg-portfolio-text', text: 'text-portfolio-cream', muted: 'text-portfolio-cream/60', border: 'border-portfolio-cream/10', hoverBorder: 'hover:border-portfolio-cream/30' },
    { bg: 'bg-portfolio-yellow', text: 'text-portfolio-text', muted: 'text-portfolio-text/60', border: 'border-portfolio-text/10', hoverBorder: 'hover:border-portfolio-text/30' },
    { bg: 'bg-portfolio-bg', text: 'text-portfolio-text', muted: 'text-portfolio-text/60', border: 'border-portfolio-text/10', hoverBorder: 'hover:border-portfolio-text/30' },
];

const ArchiveCard = ({ project, onClick, index }: ArchiveCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const theme = COLORS[index % COLORS.length];

    useGSAP(() => {
        if (!cardRef.current) return;
        const card = cardRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -2; // Reduced rotation for better performance
            const rotateY = ((x - centerX) / centerX) * 2;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1000,
                overwrite: 'auto'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div 
            ref={cardRef}
            onClick={() => onClick(project)}
            data-cursor-type="project"
            className={`group relative w-full aspect-[3/4] cursor-none rounded-[2rem] overflow-hidden ${theme.bg} border ${theme.border} ${theme.hoverBorder} transition-colors duration-500 will-change-transform`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10 pointer-events-none">
                {/* Header: Index & Year */}
                <div className="flex justify-between items-start">
                    <span className={`font-inter font-bold text-6xl md:text-7xl ${theme.text} opacity-25 group-hover:opacity-40 transition-opacity duration-500 leading-none -ml-1 select-none`}>
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* Year & Arrow - Hidden until hover */}
                    <div className="flex items-center gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <span className={`font-mono text-xs font-medium ${theme.muted} border ${theme.border} px-3 py-1.5 rounded-full`}>
                            {project.year}
                        </span>
                        <div className={`w-10 h-10 rounded-full border ${theme.border} flex items-center justify-center`}>
                            <ArrowUpRight className={`w-5 h-5 ${theme.text}`} />
                        </div>
                    </div>
                </div>

                {/* Footer: Title & Tech */}
                <div className="flex flex-col justify-end">
                    {/* Title - Moves up on hover to make room */}
                    <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-inter font-bold ${theme.text} leading-[1.1] tracking-tight mb-2`}>
                            {project.title}
                        </h3>
                    </div>
                    
                    {/* Tech Stack - Hidden until hover */}
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-out">
                        <div className="flex flex-wrap gap-2 pt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            {project.techStack.slice(0, 3).map((tech, i) => (
                                <span 
                                    key={i} 
                                    className={`text-[11px] font-mono uppercase tracking-wider ${theme.muted} border ${theme.border} px-3 py-1 rounded-full`}
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className={`text-[11px] font-mono uppercase tracking-wider ${theme.muted} border ${theme.border} px-3 py-1 rounded-full`}>
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchiveCard;
