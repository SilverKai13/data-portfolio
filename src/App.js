import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;