import { useEffect } from "react";

const useOutsideAlerter = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clicked = refs.reduce((value, ref) => {
        const out = ref.current && !ref.current.contains(event.target);
        console.log(ref, out);
        return out && value;
      }, true);
      if (clicked) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};

export default useOutsideAlerter;
