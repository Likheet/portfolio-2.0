import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '475px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
            },
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                },
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                'beige-light': '#D3D1C5',
                'accent-red': '#E2504C',
                'accent-yellow': '#EAB32E',
                'portfolio-bg': '#BCC0B6',
                'portfolio-text': '#1A1A1A',
                'portfolio-cream': '#E8E0D0',
                'portfolio-red': '#DE5448',
                'portfolio-yellow': '#EAB330',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                'roboto-flex': ['var(--font-roboto-flex)'],
                bodoni: ['var(--font-bodoni)'],
                inter: ['var(--font-inter)'],
                playfair: ['var(--font-playfair)'],
            },
            fontSize: {
                'fluid-h1': 'clamp(2.5rem, 5vw + 1rem, 6rem)',
                'fluid-h2': 'clamp(2rem, 4vw + 1rem, 4.5rem)',
                'fluid-h3': 'clamp(1.5rem, 3vw + 1rem, 3rem)',
                'fluid-body': 'clamp(1rem, 0.83vw + 0.83rem, 1.25rem)',
            },
            padding: {
                // Responsive vertical spacing used by py-section/pb-section utilities
                section: 'clamp(6rem, 8vw + 3rem, 15rem)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1536px',
                    '3xl': '1920px',
                },
            },
            transitionDuration: {
                '7000': '7s',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            },
        },
    },
    plugins: [tailwindAnimate],
} satisfies Config;
