'use client';

import { prefersReducedMotion } from '@/lib/motion';
import { ReactLenis } from 'lenis/react';
import { useState } from 'react';

type SmoothScrollProps = {
    children: React.ReactNode;
};

// Smooth wheel scrolling, off when the device asks for reduced motion.
// Touch scrolling stays native either way.
const SmoothScroll = ({ children }: SmoothScrollProps) => {
    const [smoothWheel] = useState(() => !prefersReducedMotion());

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.4, smoothWheel }}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
