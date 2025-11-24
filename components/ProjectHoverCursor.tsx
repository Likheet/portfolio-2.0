'use client';

import React, { useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectHoverCursorProps {
    children: React.ReactNode;
    className?: string;
}

const Cursor = ({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) => {
    // stiffness: 100, damping: 20, mass: 1 gives a smoother, slightly "heavy" feel
    const springConfig = { damping: 20, stiffness: 100, mass: 1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm"
        >
            <ArrowUpRight className="w-8 h-8 text-white" strokeWidth={1.5} />
        </motion.div>
    );
};

const ProjectHoverCursor = ({ children, className }: ProjectHoverCursorProps) => {
    const [isHovering, setIsHovering] = useState(false);
    
    // Mouse position motion values (raw)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className={cn('relative cursor-none', className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            <AnimatePresence>
                {isHovering && (
                    <Cursor mouseX={mouseX} mouseY={mouseY} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectHoverCursor;
