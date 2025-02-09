import React from "react";
import { Suspense } from "react";
import WaveAnimation from "./WaveAnimation";
import Navbar from "./Navbar"; // Import Navbar
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
      <div className="hero-content">
        <h1>Welcome to the Waves</h1>
        <p>Enjoy the soothing motion of the waves in the background.</p>
      </div>
    </div>
  );
};

export default Hero;
