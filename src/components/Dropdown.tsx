import React, { useState } from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";

interface DropdownProps {
  options: any;
}

const Dropdown = (props: DropdownProps) => {
  const { options } = props;
  const [toggle, setToggle] = useState(false);
  console.log(options);
  return (
    <div
      className={`dropdown ${toggle ? "active" : ""}`}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div className="label">Hunderase</div>
      <input type="text" placeholder="Velg hunderase" readOnly></input>
      <div className="option">
        {options.map((option: any) => (
          <div className="horizontal">
            <CircleIcon htmlColor="red"></CircleIcon>
            <div className="">
              <div>{option.name}</div>
              <div>{option.temperament}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
