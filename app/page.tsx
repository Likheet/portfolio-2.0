import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Education from './_components/Education';
import Contact from './_components/Contact';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Education />
            <Skills />
            <Experiences />
            <ProjectList />
            <Contact />
        </div>
    );
}
