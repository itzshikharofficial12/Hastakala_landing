
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import JoinArtist from './components/JoinArtist';
import OurStory from './components/OurStory';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Blog Pages
import BlogPage from './src/pages/BlogPage';
import BlogDetail from './src/pages/BlogDetail';

const HomePage = () => (
  <>
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="join-artist">
      <JoinArtist />
    </section>
    <section id="our-story">
      <OurStory />
    </section>
    <section id="faq">
      <FAQ />
    </section>
    <section id="contact">
      <ContactUs />
    </section>
  </>
);

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="bg-brand-bg min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
