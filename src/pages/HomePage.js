import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
