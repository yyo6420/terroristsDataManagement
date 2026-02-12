import { useState } from "react";
import "./App.css";
import NavBar from "../navBar/NavBar";
import TerirstsData from "../teroristsData/TeroristsData";
import FilterSection from "../filterSection/FilterSection";

import teroristsData from "../../terorists/terorists";

function App() {
  const [terrorists, setTerrorists] = useState([...teroristsData]);
  const [filterName, setFilterName] = useState("");

  function filter(filterName) {
    setFilterName(filterName)
    setTerrorists(teroristsData.filter((t) => t.name.includes(filterName)));
  }

  return (
    <>
      <NavBar />
      <div className="filterSectionDiv">
        <FilterSection
          filterName={filterName}
          filter={(value) => filter(value)}
        />
      </div>

      <div className="dataTeroristsDiv">
        <TerirstsData terrorists={terrorists} />
      </div>
    </>
  );
}

export default App;
