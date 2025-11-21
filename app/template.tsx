'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.set('.page-content', { opacity: 0, pointerEvents: 'none' })
            .to('.page-transition--inner', {
                yPercent: 0,
                duration: 0.25,
            })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.25,
            })
            .to('.page-transition', {
                yPercent: -100,
                duration: 0.3,
            })
            .to(
                '.page-content',
                { opacity: 1, pointerEvents: 'auto', duration: 0.4 },
                '-=0.1',
            );
    });

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            <div className="page-content">{children}</div>
        </div>
    );
}
