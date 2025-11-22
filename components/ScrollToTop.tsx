'use client';

import { useLenis } from 'lenis/react';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        lenis?.scrollTo(0, { duration: 1.5 });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[5] p-2 md:p-3 rounded-full bg-background-light text-foreground border border-border shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none',
                {
                    'opacity-0 translate-y-10 pointer-events-none': !isVisible,
                    'opacity-100 translate-y-0': isVisible,
                },
            )}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    );
};

export default ScrollToTop;
