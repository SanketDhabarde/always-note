import React from "react";

function Input({
  label,
  type,
  class_name,
  placeholder,
  value,
  changeHandler,
  disabled,
  required,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        className={class_name}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        disabled={disabled}
        required={required}
      />
    </label>
  );
}

export default Input;
