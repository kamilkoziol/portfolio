import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  return (
    <div className="bg-blue-600 h-[5000px]">
      <Navbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
    </div>
  );
}

export default App;
