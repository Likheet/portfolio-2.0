"use client";
import { ReactNode, useState, useEffect } from 'react';
import { SectionFlower } from './icons';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={25}
                    className={cn(
                        'animate-spin duration-7000',
                        (mounted && theme === 'light') ? 'brightness-[0.8]' : '',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
