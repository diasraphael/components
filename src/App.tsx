import React from "react";
import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
//import fetchBreeds from "./services/api";
import data from "./mock/data";
function App() {
  const [breeds] = useState(data);
  /* useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await fetchBreeds();
      setBreeds(data);
    };
    fetchData();
  }, []); */

  return (
    <div className="App">
      <Dropdown options={breeds}></Dropdown>
    </div>
  );
}

export default App;
