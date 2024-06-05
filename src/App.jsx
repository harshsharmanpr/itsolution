import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ServicePage from "./Pages/ServicesPage/ServicePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;
