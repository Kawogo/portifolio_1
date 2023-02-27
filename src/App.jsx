import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SkillsExperience from "./pages/SkillsExperience";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Home />
      <SkillsExperience />
      <Services />
      <Works />
      <Contacts />
      <Footer />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
