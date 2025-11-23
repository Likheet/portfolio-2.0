'use client';

import { ReactLenis } from 'lenis/react';
import { useMemo } from 'react';

type SmoothScrollProps = {
    children: React.ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    const options = useMemo(
        () => ({
            duration: 1.1,
            lerp: 0.08,
            smoothWheel: true,
            syncTouch: true,
            syncTouchLerp: 0.12,
            touchInertiaMultiplier: 18,
            wheelMultiplier: 0.9,
            gestureOrientation: 'vertical',
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }),
        [],
    );

    return (
        <ReactLenis root options={options}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
