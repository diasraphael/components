import React from "react";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

const Content = () => {
  return (
    <div className="flex flex-row">
      <div className="flex w-screen">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
};

export default Content;
