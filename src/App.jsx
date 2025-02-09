import { Suspense } from "react";
import WaveAnimation from "./components/WaveAnimation";
import "./App.css"; // Import a CSS file for styling
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  return (
    <div className="app-container">
      <WaveAnimation/>
      <Navbar/>
      <Hero/>
      <div className="events-container">
        <Events />
      </div>    
    </div>
  );
}

export default App;

