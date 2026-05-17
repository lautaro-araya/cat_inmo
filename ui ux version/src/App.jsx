import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PlatPlan from "./components/PlatPlan.jsx";
import LotDirectory from "./components/LotDirectory.jsx";
import Infrastructure from "./components/Infrastructure.jsx";
import Location from "./components/Location.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [openLot, setOpenLot] = useState(null);
  const handleSelect = useCallback((id) => setOpenLot(id), []);
  const handleOpened = useCallback(() => setOpenLot(null), []);

  return (
    <div className="min-h-screen bg-paper text-graphite">
      <Header />
      <main>
        <Hero />
        <PlatPlan onSelect={handleSelect} />
        <LotDirectory openLot={openLot} onLotOpened={handleOpened} />
        <Infrastructure />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
