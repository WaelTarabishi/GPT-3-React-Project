import React from "react";
import "./App.css";
import {
  Features,
  Header,
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
} from "../src/containers/index";
import { CTA, Navbar, Brand } from "./Components/index";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
