import { useState } from "react";
import "./App.css";
import NavBar from "../navBar/NavBar";
import TerirstsData from "../teroristsData/TeroristsData";
import FilterSection from "../filterSection/FilterSection";
function App() {
  const [data, setData] = useState({});

  return (
    <>
      <NavBar />
      <div className="filterSectionDiv">
        <FilterSection />
      </div>

      <div className="dataTeroristsDiv">
        <TerirstsData />
      </div>
    </>
  );
}

export default App;
