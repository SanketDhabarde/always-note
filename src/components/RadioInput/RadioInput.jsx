import React from "react";
import "./RadioInput.css";

function RadioInput({ label, name, checked, changeHandler }) {
  return (
    <label className="radio-input py-1">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={changeHandler}
      />{" "}
      {label}
    </label>
  );
}

export default RadioInput;
