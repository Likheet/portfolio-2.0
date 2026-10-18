'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const PRELOADER_NAME = 'LIKHEET';

// The intro plays once per browser session and never with reduced motion.
// This runs in <head> so a skipped intro is hidden before the first paint.
export const SKIP_INTRO_SCRIPT = `try {
    if (sessionStorage.getItem('intro-played') || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.setAttribute('data-skip-intro', '');
    }
} catch (e) {}`;

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (document.documentElement.hasAttribute('data-skip-intro')) {
                return;
            }
            try {
                sessionStorage.setItem('intro-played', '1');
            } catch {}

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 0.3,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="preloader fixed inset-0 z-[100] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-white dark:bg-background"></div>

            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden text-foreground">
                {PRELOADER_NAME.split('').map((char, idx) => (
                    <span className="inline-block translate-y-full" key={`${char}-${idx}`}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
