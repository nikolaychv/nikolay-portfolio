import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>

            <Footer />
        </>
    );
}