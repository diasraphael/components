import React, { useState } from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";

interface DropdownProps {
  // dropdownOptions: any;
}

const Dropdown = (props: DropdownProps) => {
  //const { dropdownOptions } = props;
  const [toggle, setToggle] = useState(false);
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
        <div className="horizontal">
          <CircleIcon htmlColor="red"></CircleIcon>
          <div className="">
            <div>Affenpinscher</div>
            <div>Stubborn, Curious, Playful, Adventurous, Active, Fun-...</div>
          </div>
        </div>
        <div className="horizontal">
          <CircleIcon htmlColor="yellow"></CircleIcon>
          <div>
            <div>Afghan Hound</div>
            <div>Aloof, Clownish, Dignified, Independent, Happy</div>
          </div>
        </div>
        <div className="horizontal">
          <CircleIcon htmlColor="blue"></CircleIcon>
          <div>
            <div>African Hunting Dog</div>
            <div>Wild, Hardworking, Dutiful</div>
          </div>
        </div>
        <div className="horizontal">
          <CircleIcon htmlColor="black"></CircleIcon>
          <div>
            <div>Affenpinscher</div>
            <div>Stubborn, Curious, Playful, Adventurous, Active, Fun-...</div>
          </div>
        </div>
        <div className="horizontal">
          <CircleIcon htmlColor="green"></CircleIcon>
          <div>
            <div>Affenpinscher</div>
            <div>Stubborn, Curious, Playful, Adventurous, Active, Fun-...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
