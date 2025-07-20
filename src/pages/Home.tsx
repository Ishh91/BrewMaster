import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Blogs from '../components/Blogs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Products />
      <Reviews />
      <Contact />
      <Blogs />
    </>
  );
};

export default Home;