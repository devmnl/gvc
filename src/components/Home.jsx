import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import WhatsAppButton from './WhatsAppButton';

const Home = () => {
  return (
    <>
      <CookieConsent />
      <WhatsAppButton />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;