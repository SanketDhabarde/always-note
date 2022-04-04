import React from "react";
import "./Chips.css";

function Chips({ text }) {
  return (
    <div className="chips border-s px-1 m-1" title={text}>
      <small>{text}</small>
    </div>
  );
}

export default Chips;
