import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import {
  DropdownType,
  initialState,
  Option,
  placeholderText,
  title,
} from "./components/types";
import fetchBreeds from "./services/api";
import generateRandomColorCode from "./util/util";

function App() {
  const [breeds, setBreeds] = useState<Option[]>([initialState]);
  const [breed, setBreed] = useState(initialState);
  const handleChange = (option: Option) => {
    setBreed(option);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBreeds();
      if (data)
        setBreeds(
          data.map((option: DropdownType) => ({
            selected: breed.key === option.id ? true : false,
            label: option.name,
            key: option.id,
            content: [option.name, option.temperament],
            colorCode: generateRandomColorCode(),
          }))
        );
    };
    fetchData();
  }, [breed.key]);

  return (
    <div className="App">
      <Dropdown
        options={breeds}
        value={breed}
        onChange={handleChange}
        title={title}
        placeholderText={placeholderText}
      ></Dropdown>
    </div>
  );
}

export default App;
