import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import About from "./assets/pages/About/About";
import Error404 from "./assets/pages/Error404";
import Fiche from "./assets/pages/Fiche/Fiche";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/logements/:id" element={<Fiche />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
