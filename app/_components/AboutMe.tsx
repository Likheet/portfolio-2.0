'use client';
import { useRiseIn } from '@/lib/motion';
import React from 'react';
import FlipWords from './FlipWords';

const HIGHLIGHTS = [
    { label: 'Studying', value: 'Master of IT (Artificial Intelligence), UNSW' },
    { label: 'Building', value: 'YTFast, Life Ledger and Nucleus AI' },
    { label: 'Contributing', value: 'Pydantic Monty, fontkit and SchemaStore' },
    {
        label: 'Certified',
        value: 'Azure AI Engineer and OCI Networking Professional',
    },
];

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    useRiseIn(container, '.slide-up-and-fade');

    return (
        <section className="pb-10 sm:pb-14 pt-10 sm:pt-14" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-10 sm:mb-14 lg:mb-20 leading-[1.05] tracking-[0.01em] text-balance max-w-5xl slide-up-and-fade">
                    I turn ML experiments into products that feel{' '}
                    <FlipWords
                        words={['smooth', 'smarter', 'polished', 'human']}
                        duration={2600}
                        className="border-b border-foreground/20"
                    />{' '}
                    by pairing human-centered research with hands-on
                    engineering.
                </h2>

                <p className="pb-3 border-b text-muted-foreground text-sm sm:text-base slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-14 mt-6">
                    <div className="md:col-span-5">
                        <p className="text-4xl sm:text-5xl leading-[1.05] slide-up-and-fade">
                            Hi, I&apos;m Likheet Shetty.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="max-w-[620px]">
                            <p className="text-lg sm:text-xl leading-relaxed slide-up-and-fade">
                                I&apos;m a Master of IT student at UNSW who
                                likes turning AI ideas into products people
                                actually use.
                            </p>
                            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed slide-up-and-fade">
                                Most of my time goes into LLMs, tokenization
                                and multi-agent prompt systems, and my
                                long-term goal is to work on a frontier AI
                                team like DeepMind or Anthropic.
                            </p>

                            <dl className="mt-8 sm:mt-10 border-t">
                                {HIGHLIGHTS.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8.5rem_1fr] gap-4 py-3.5 border-b slide-up-and-fade"
                                    >
                                        <dt className="font-inter text-xs uppercase tracking-wider opacity-60 pt-1">
                                            {item.label}
                                        </dt>
                                        <dd className="text-base sm:text-lg">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
