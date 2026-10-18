import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Rises the matching elements in once, quickly, when the section scrolls into
// view. They stay visible afterwards and are left alone with reduced motion.
export const useRiseIn = (scope: RefObject<HTMLElement>, selector: string) =>
    useGSAP(
        () => {
            if (prefersReducedMotion()) return;

            gsap.from(selector, {
                y: 40,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: { amount: 0.4 },
                scrollTrigger: {
                    trigger: scope.current,
                    start: 'top 85%',
                    once: true,
                },
            });
        },
        { scope },
    );
