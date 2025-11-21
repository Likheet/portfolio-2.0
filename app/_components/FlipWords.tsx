'use client';

import React from 'react';

type FlipWordsProps = {
    words: string[];
    duration?: number; // ms per word
    className?: string;
};

// Lightweight flip animation inspired by shadcn/aceternity.
// Runs through the list once, then rests. Hover to replay.
const FlipWords: React.FC<FlipWordsProps> = ({
    words,
    duration = 2800,
    className = '',
}) => {
    const [index, setIndex] = React.useState(0);
    const [cycle, setCycle] = React.useState(0); // bump to restart animation
    const timersRef = React.useRef<number[]>([]);
    const maxLen = React.useMemo(
        () => (words.length ? Math.max(...words.map((w) => w.length)) : 0),
        [words],
    );
    // Slightly below full longest word to tighten spacing after the underline.
    const widthCh = React.useMemo(
        () => (maxLen ? Math.max(maxLen - 1, 4) : undefined),
        [maxLen],
    );

    const wordsKey = React.useMemo(() => words.join('|'), [words]);

    const clearTimers = React.useCallback(() => {
        timersRef.current.forEach((t) => clearTimeout(t));
        timersRef.current = [];
    }, []);

    const runSequence = React.useCallback(() => {
        clearTimers();
        setCycle((c) => c + 1);
        setIndex(0);

        if (words.length <= 1) return;

        const base = duration;
        const last = duration * 1.4; // slow the final reveal
        let acc = base;

        for (let i = 1; i < words.length; i++) {
            const isLast = i === words.length - 1;
            const step = isLast ? last : base;

            const timer = window.setTimeout(() => setIndex(i), acc);
            timersRef.current.push(timer);
            acc += step;
        }
    }, [clearTimers, duration, words.length, wordsKey]);

    React.useEffect(() => {
        runSequence();
        return () => clearTimers();
    }, [runSequence, clearTimers]);

    const handleReplay = () => {
        runSequence();
    };

    const currentWord = words[index] ?? '';
    const isLastWord = index === words.length - 1;
    const displayDuration = isLastWord ? duration * 1.4 : duration;

    return (
        <span
            className={`relative inline-flex h-[1.1em] align-baseline overflow-hidden ${className}`}
            onMouseEnter={handleReplay}
            aria-live="polite"
            style={widthCh ? { width: `${widthCh}ch` } : undefined}
        >
            <span
                key={`${cycle}-${index}-${currentWord}`}
                className="block text-foreground text-center w-full"
                style={{
                    animationDuration: `${displayDuration}ms`,
                    animationName: isLastWord ? 'flipWordFinal' : 'flipWord',
                    animationFillMode: 'forwards',
                }}
            >
                {currentWord}
            </span>
            <style jsx>{`
                @keyframes flipWord {
                    0% {
                        opacity: 0;
                        transform: translateY(100%);
                    }
                    15% {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                    85% {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-80%);
                    }
                }
                @keyframes flipWordFinal {
                    0% {
                        opacity: 0;
                        transform: translateY(100%);
                    }
                    25% {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0%);
                    }
                }
            `}</style>
        </span>
    );
};

export default FlipWords;
