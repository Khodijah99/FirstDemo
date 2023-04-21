import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SpecialMenu from "./pages/SpecialMenu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactUs" element={<ContactPage />} />
        <Route path="/FoodMenu" element={<SpecialMenu />} />
      </Routes>
    </div>
  );
}

export default App;
