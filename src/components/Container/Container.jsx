import React from "react";

const Container = ({ children }) => {
  const [header, content, footer] = children;
  return (
    <div className="flex min-h-screen flex-col">
      <div>{header}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Container;
