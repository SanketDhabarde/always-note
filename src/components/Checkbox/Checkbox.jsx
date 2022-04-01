import React from "react";
import "./Checkbox.css";

function Checkbox({ title, checked, changeHandler }) {
  return (
    <label className="checkbox py-1">
      <input type="checkbox" checked={checked} onChange={changeHandler} />{" "}
      {title}
    </label>
  );
}

export default Checkbox;
