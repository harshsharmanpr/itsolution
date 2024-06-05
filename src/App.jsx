import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/footer/Footer";
// import { CallBook } from "./assets/assets";
import BokkCall from "./Component/bookCall/BokkCall";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <BokkCall />
      <Footer />
    </>
  );
}

export default App;
