import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Brands from "./Brands";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import BackTopBtn from "./BackTopBtn";
export const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </>
  );
};
