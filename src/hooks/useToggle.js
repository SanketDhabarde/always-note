import { useState } from "react";

export const useToggle = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState((prevState) => !prevState);
  };

  return [toggleState, toggle];
};
