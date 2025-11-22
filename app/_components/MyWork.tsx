'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS, PUBLICATIONS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/Button';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MyWork = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(null);

        if (imageContainer.current) {
            gsap.to(imageContainer.current, {
                duration: 0.2,
                opacity: 0,
            });
        }
    };

    return (
        <section className="pb-section" id="my-work">
            <div className="container">
                <SectionTitle title="MY WORK" />

                <div
                    className="group/projects relative"
                    ref={containerRef}
                    onMouseLeave={handleMouseLeave}
                >
                    {selectedProject !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] lg:w-[260px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
                            ref={imageContainer}
                        >
                            {PROJECTS.map((project) => (
                                <Image
                                    src={project.thumbnail}
                                    alt="Project"
                                    width="400"
                                    height="500"
                                    className={cn(
                                        'absolute inset-0 transition-all duration-500 w-full h-full object-cover',
                                        {
                                            'opacity-0':
                                                project.slug !==
                                                selectedProject,
                                        },
                                    )}
                                    ref={imageRef}
                                    key={project.slug}
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col gap-16" ref={projectListRef}>
                        {/* Research Papers Subsection */}
                        {PUBLICATIONS && PUBLICATIONS.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-medium text-muted-foreground">
                                        Research Papers
                                    </h3>
                                    <Link
                                        href="/archive"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        View All{' '}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    {PUBLICATIONS.map((pub, index) => (
                                        <div
                                            key={index}
                                            className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
                                        >
                                            <div className="flex gap-2 md:gap-5">
                                                <div className="font-anton text-muted-foreground">
                                                    01.
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <h4 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl flex gap-4 font-anton leading-tight transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                                            {pub.title}
                                                            {pub.url && (
                                                                <Link
                                                                    href={
                                                                        pub.url
                                                                    }
                                                                    target="_blank"
                                                                    className="text-foreground opacity-0 group-hover:opacity-100 transition-all"
                                                                >
                                                                    <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
                                                                </Link>
                                                            )}
                                                        </h4>
                                                    </div>
                                                    <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-sm font-medium">
                                                        <span>
                                                            {pub.conference}
                                                        </span>
                                                        <span className="inline-block size-1.5 rounded-full bg-muted-foreground/50 self-center"></span>
                                                        <span>{pub.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Projects Subsection */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-medium text-muted-foreground">
                                    Projects
                                </h3>
                                <Link
                                    href="/archive"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    View All{' '}
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="flex flex-col max-md:gap-10">
                                {PROJECTS.map((project, index) => (
                                    <Project
                                        index={index}
                                        project={project}
                                        selectedProject={selectedProject}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        key={project.slug}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="flex justify-center mt-16">
                        <Button as="link" href="/archive" variant="secondary">
                            <span className="flex items-center gap-2">
                                View All Work
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWork;
