import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";

interface DropdownProps {
  options: any;
}

const Dropdown = (props: DropdownProps) => {
  const { options } = props;
  const outsideClickRef: any = useRef(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        if (toggle) setToggle(!toggle);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div
      className={`dropdown ${toggle ? "active" : ""}`}
      onClick={(event: any) => {
        setToggle(!toggle);
      }}
      ref={outsideClickRef}
    >
      <div className="label">Hunderase</div>
      <input type="text" placeholder="Velg hunderase" readOnly></input>
      <div className="option">
        {options.map((option: any, index: any) => (
          <div className="horizontal" key={index}>
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
