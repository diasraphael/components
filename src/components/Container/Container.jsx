import React from "react";

const Container = ({ children }) => {
  const [sidebar, content] = children;
  return (
    <div style={{ display: "flex" }}>
      <>{sidebar}</>
      <>{content}</>
    </div>
  );
};

export default Container;
