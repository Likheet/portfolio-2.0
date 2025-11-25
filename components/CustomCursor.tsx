'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const defaultCursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isProjectHover, setIsProjectHover] = useState(false);
    
    // Use refs for quickTo instances to avoid recreating them
    const xTo = useRef<any>();
    const yTo = useRef<any>();

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        // Initialize quickTo
        if (cursorRef.current) {
            xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3.out" });
            yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3.out" });
        }

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!cursorRef.current) return;

            const { clientX, clientY } = e;
            
            // Use quickTo for high-performance movement
            xTo.current(clientX);
            yTo.current(clientY);

            const target = e.target as HTMLElement;
            // Only hide if explicitly requested AND not in project hover mode
            const isProject = target.closest('[data-cursor-type="project"]');
            const shouldHide = !isProject && target.closest('[data-hide-cursor="true"]');

            // Use standard to() for non-movement properties
            gsap.to(cursorRef.current, {
                opacity: shouldHide ? 0 : 1,
                duration: 0.2,
                overwrite: 'auto' // Prevent conflicts
            });
        }) as any;

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            
            // Check for project hover first
            const projectHover = target.closest('[data-cursor-type="project"]');
            setIsProjectHover(!!projectHover);

            // Check if we should hide the global cursor
            const shouldHide = !projectHover && target.closest('[data-hide-cursor="true"]');
            if (shouldHide) {
                if (cursorRef.current) {
                    cursorRef.current.style.opacity = '0';
                }
                return;
            }

            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'IFRAME' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    });

    // Animate transition between default and project cursor
    useGSAP(() => {
        if (isProjectHover) {
            gsap.killTweensOf(defaultCursorRef.current);
            gsap.to(defaultCursorRef.current, { 
                opacity: 0, 
                scale: 0, 
                duration: 0.3, 
                ease: 'power2.out',
                overwrite: true
            });
        } else {
            gsap.killTweensOf(defaultCursorRef.current);
            gsap.to(defaultCursorRef.current, { 
                opacity: 1, 
                scale: 1, 
                duration: 0.3, 
                ease: 'power2.out',
                overwrite: true
            });
        }
    }, [isProjectHover]);

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none"
            id="cursor"
        >
            {/* Default Cursor Container */}
            <div ref={defaultCursorRef} className="absolute top-0 left-0">
                {isHovering ? (
                    <div className="relative w-12 h-12 -translate-x-3 -translate-y-2 transition-all duration-200">
                        <Image
                            src="/pointer.png"
                            alt="Pointer"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                ) : (
                    <svg
                        width="27"
                        height="30"
                        viewBox="0 0 27 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200"
                    >
                        <path
                            d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                            className="fill-foreground stroke-background/50"
                        />
                    </svg>
                )}
            </div>

            {/* Project Cursor Component - Always rendered but animates in/out */}
            <ProjectCursor isActive={isProjectHover} />
        </div>
    );
};

const ProjectCursor = ({ isActive }: { isActive: boolean }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        if (isActive) {
            // Enter Animation
            gsap.to(containerRef.current, { 
                scale: 1, 
                opacity: 1, 
                duration: 0.6, 
                ease: 'power3.out',
                overwrite: true
            });
            
            // Arrow slide-in
            gsap.fromTo(arrowRef.current,
                { x: -20, y: 20, opacity: 0 },
                { 
                    x: 0, 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.5, 
                    ease: 'power3.out',
                    delay: 0.1,
                    overwrite: true
                }
            );
        } else {
            // Exit Animation
            gsap.to(containerRef.current, { 
                scale: 0, 
                opacity: 0, 
                duration: 0.4, 
                ease: 'power2.in',
                overwrite: true
            });
        }
    }, [isActive]);

    return (
        <div 
            ref={containerRef}
            className="absolute top-0 left-0 flex items-center justify-center w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-foreground/10 backdrop-blur-sm opacity-0 scale-0 origin-center"
        >
            <svg 
                ref={arrowRef}
                xmlns="http://www.w3.org/2000/svg" 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-foreground"
            >
                {/* Longer arrow shaft */}
                <path d="M5 19L19 5" />
                {/* Arrowhead */}
                <path d="M8 5h11v11" />
            </svg>
        </div>
    );
};

export default CustomCursor;
