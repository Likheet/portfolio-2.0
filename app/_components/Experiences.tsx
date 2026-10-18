'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useRiseIn } from '@/lib/motion';
import { useRef } from 'react';

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useRiseIn(containerRef, '.experience-item');

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-10 md:gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div key={item.title} className="experience-item">
                            <p className="text-lg sm:text-xl text-muted-foreground">
                                {item.company}
                            </p>
                            <p className="text-4xl sm:text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
