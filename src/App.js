import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchForm />
      <Features />
      <Footer />
    </>
  );
};

export default App;
