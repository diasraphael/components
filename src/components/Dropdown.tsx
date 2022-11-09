import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Option } from "./types";

export interface DropdownProps {
  options: Option[];
  value: Option;
  title: string;
  placeholderText: string;
  onChange: (option: Option) => void;
}

const DropdownInput = (value: Option, placeholderText: string) => (
  <div
    className="flex items-center select-none left-0 w-full h-full cursor-pointer bg-[#0000000d] rounded-2xl border-none outline-none px-4 py-2.5- focus:bg-[#b7faac]"
    tabIndex={0}
  >
    {value.key ? (
      <>
        <CircleIcon className="mr-3" htmlColor={value.colorCode}></CircleIcon>
        <span className="flex-1">{value.label}</span>
      </>
    ) : (
      <div className="flex-1">{placeholderText}</div>
    )}
    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
  </div>
);

const DropdownOptions = (
  options: Option[],
  toggle: boolean,
  onChange: (option: Option) => void
) => (
  <ul
    className={`cursor-pointer absolute w-full drop-shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-[#fff] rounded-2xl overflow-hidden top-[84px] overflow-y-auto max-h-52 ${
      toggle ? "block" : "hidden"
    }`}
    tabIndex={1}
  >
    {options.length &&
      options.map((option: Option) => (
        <li
          className={`flex items-center p-3 hover:bg-[#b7faac] ${
            option.selected && "bg-[#b7faac]"
          }`}
          key={option.key}
          onClick={() => onChange(option)}
        >
          <CircleIcon
            className="mr-4"
            htmlColor={option.colorCode}
          ></CircleIcon>
          <span className="overflow-hidden">
            {option.content.map((data: string, index: number) => (
              <div
                className={`truncate ${index % 2 === 0 && "font-bold"}`}
                key={index}
              >
                {data}
              </div>
            ))}
          </span>
        </li>
      ))}
  </ul>
);

const Dropdown = (props: DropdownProps) => {
  const { options, value, placeholderText, title, onChange } = props;
  const outsideClickRef: any = useRef(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        if (toggle) setToggle((previousValue: boolean) => !previousValue);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      className={`dropdown`}
      id="dropdown"
      onClick={() => {
        setToggle((previousValue: boolean) => !previousValue);
      }}
      ref={outsideClickRef}
    >
      <div className="text-base my-2">{title}</div>
      {DropdownInput(value, placeholderText)}
      {DropdownOptions(options, toggle, onChange)}
    </div>
  );
};

export default Dropdown;
