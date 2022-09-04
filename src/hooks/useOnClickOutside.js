import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
        console.log(ref.current);
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
