import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <div className="container">
        <Projects featured={true} />
      </div>
      <Contact />
    </div>
  );
}

export default Home;
