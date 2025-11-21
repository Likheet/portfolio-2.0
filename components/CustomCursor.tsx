'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!cursorRef.current) return;

            const { clientX, clientY } = e;

            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1,
            });
        }) as any;

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
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

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none"
            id="cursor"
        >
            {isHovering ? (
                <div className="relative w-12 h-12 -translate-x-3 -translate-y-2">
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
                >
                    <path
                        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                        className="fill-foreground stroke-background/50"
                    />
                </svg>
            )}
        </div>
    );
};

export default CustomCursor;
