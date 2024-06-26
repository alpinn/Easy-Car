import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import CardDeals from "./components/CardDeals";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <CardDeals />
    </div>
  );
}

export default App;
