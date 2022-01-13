import React, { useState } from "react";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show /* clicks from inside the modal set the modal to false */ && (
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={() => setShow(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              margin: "10% auto",
              padding: "20px",
              width: "50%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
