import type { Metadata } from 'next';
import {
    Anton,
    Roboto_Flex,
    Bodoni_Moda,
    Inter,
    Playfair_Display,
    Manrope,
    Syne,
} from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

const bodoniModa = Bodoni_Moda({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-bodoni',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    style: 'italic',
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Portfolio - Likheet Shetty',
    description:
        'Likheet Shetty — AI-focused software developer building ML prototypes, interactive frontends, and cloud-native tools.',
};

// Root layout component
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <html lang="en" suppressHydrationWarning>
            {isProduction && <GoogleAnalytics gaId="G-MHLY1LNGY5" />}
            {isProduction && (
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
            )}
            <body
                suppressHydrationWarning
                className={`${antonFont.variable} ${robotoFlex.variable} ${bodoniModa.variable} ${inter.variable} ${playfair.variable} ${manrope.variable} ${syne.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ReactLenis
                        root
                        options={{
                            lerp: 0.1,
                            duration: 1.4,
                        }}
                    >
                        {/* <a
                            href="https://forms.gle/t73XYJgWD5cJNr6e8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                        >
                            Frontend dev? I&apos;ll help you polish your resume —
                            completely free.
                        </a> */}
                        <Navbar />
                        <main>{children}</main>
                        <Footer />

                        <CustomCursor />
                        <Preloader />
                        <ScrollProgressIndicator />
                        <ParticleBackground />
                                            <StickyEmail />
                                            <ScrollToTop />
                                        </ReactLenis>                </ThemeProvider>
            </body>
        </html>
    );
}
