'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const PARTICLE_COUNT = 50;

const ParticleBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current = particlesRef.current.filter(Boolean);
        
        particlesRef.current.forEach((particle) => {
            if (!particle) return;
            
            const size = Math.random() * 3 + 1;
            const startX = Math.random() * 100; // percentage across viewport width
            const startY = Math.random() * -100; // start above viewport
            const duration = Math.random() * 15 + 15;

            gsap.set(particle, {
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                opacity: Math.random() * 0.5 + 0.2,
                force3D: true,
            });

            gsap.to(particle, {
                y: window.innerHeight * 2,
                duration: duration,
                repeat: -1,
                ease: 'none',
                force3D: true,
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(PARTICLE_COUNT)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full bg-foreground/30 will-change-transform"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;

