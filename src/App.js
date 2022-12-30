import React from "react";

// import components

import { Route, Routes } from "react-router-dom";
import { OdevFinal } from "./components/OdevFinal";
import { Home } from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-white relative">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<OdevFinal />} />
      </Routes>
    </div>
  );
};

export default App;
