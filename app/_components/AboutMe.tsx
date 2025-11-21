'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import FlipWords from './FlipWords';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 leading-[1.05] tracking-[0.01em] text-balance max-w-5xl slide-up-and-fade">
                    I turn ML experiments into products that feel{' '}
                    <FlipWords
                        words={['smooth', 'smarter', 'polished', 'human']}
                        duration={2600}
                        className="border-b border-foreground/20"
                    />{' '}
                    by pairing human-centered research with hands-on
                    engineering.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Likheet Shetty.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[520px] leading-9 text-justify space-y-4">
                            <p className="slide-up-and-fade">
                                I&apos;m Likheet, an ECE undergrad and incoming
                                MS IT (AI) student at UNSW who likes turning AI
                                ideas into working products. I&apos;ve built
                                Alan AI voice apps, fraud detection models,
                                dashboards for real-world workflows, and even a
                                tokenizer benchmark for Indic and code-mixed
                                text. Most of my time goes into LLMs,
                                tokenization, and multi-agent prompt systems,
                                with the long term goal of working on frontier
                                AI teams like DeepMind or Anthropic. On the
                                cloud side I&apos;m certified on Azure AI and
                                Oracle Cloud Infrastructure, and I&apos;ve done
                                50+ Google Cloud skill labs, so I&apos;m
                                comfortable taking a rough Python or JavaScript
                                prototype and shipping it as something people
                                can actually use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
