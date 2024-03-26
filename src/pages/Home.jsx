import React from "react";
import { Navbar } from "../components";
import { About, Footer, Header, Skills, Work } from "../container";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />

      <Footer />
    </div>
  );
};

export default Home;
