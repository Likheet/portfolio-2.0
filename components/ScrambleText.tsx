'use client';
import React, { useRef, useState, useEffect } from 'react';

interface ScrambleTextProps {
    text: string;
    className?: string;
    chars?: string;
    speed?: number;
    revealDelay?: number;
    autoStart?: boolean;
}

const ScrambleText = ({
    text,
    className,
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+',
    speed = 50,
    revealDelay = 0,
    autoStart = false,
}: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        let iteration = 0;
        
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Optional delay before starting to resolve
        timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split('')
                        .map((char, index) => {
                            if (char === ' ') return ' '; // Preserve spaces
                            
                            if (index < iteration) {
                                return text[index];
                            }
                            
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }

                iteration += 1 / 3; // Adjust this value to control how fast it resolves
            }, 30);
        }, revealDelay);
    };

    useEffect(() => {
        if (autoStart) {
            startScramble();
        }
    }, [autoStart]);

    const stopScramble = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setDisplayText(text);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={startScramble}
            onMouseLeave={stopScramble}
            style={{ display: 'inline-block' }} // Ensure it behaves like a block for transforms if needed
        >
            {displayText}
        </span>
    );
};

export default ScrambleText;
