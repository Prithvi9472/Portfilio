import React from "react";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

function Landing() {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <About />
            <Resume />
            <Projects />
            <Education />
            <Contact />

        </div>


    );
}

export default Landing;