import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Experience />
        <Skills />
        <Research />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;