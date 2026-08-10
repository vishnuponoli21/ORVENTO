import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import About from "./components/home/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
