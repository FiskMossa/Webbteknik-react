import Home from "./pages/Home";
import MellanStoraRätter from "./pages/MellanStoraRätter";
import MindreRätter from "./pages/MindreRätter";
import Desserter from "./pages/Desserter";
import Viner from "./pages/Viner";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./LillaKrogen.css";
import LikeButton from "./components/LikeButton";
import Captcha from "./components/Captcha";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/MellanStoraRätter" element={<MellanStoraRätter />} />
          <Route path ="/Mindrerätter" element={<MindreRätter />} />
          <Route path ="/Desserter" element={<Desserter />} />
          <Route path ="/Viner" element={<Viner />} />
        </Routes>
        <LikeButton />
        <Captcha />
        <Footer />
      </Router>
      
    </div>
  );  
}

export default App