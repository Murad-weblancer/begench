import React from "react";

// import components

import { Route, Routes } from "react-router-dom";
import { OdevFinal } from "./components/OdevFinal";
import { Home } from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import Last from "./components/Last";

const App = () => {
  return (
    <div className="bg-white relative">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<OdevFinal />} />
        <Route path="/last" element={<Last />} />
      </Routes>
        <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
