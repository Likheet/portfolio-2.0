'use client';
import { useState } from 'react';
import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import MyWork from './_components/MyWork';
import Education from './_components/Education';
import Contact from './_components/Contact';
import ArchiveOverlay from './_components/ArchiveOverlay';

export default function Home() {
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Education />
            <Skills />
            <Experiences />
            <MyWork onViewAllClick={() => setIsArchiveOpen(true)} />
            <Contact />
            
            <ArchiveOverlay 
                isOpen={isArchiveOpen} 
                onClose={() => setIsArchiveOpen(false)} 
            />
        </div>
    );
}
