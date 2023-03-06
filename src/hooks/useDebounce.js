import { useEffect } from "react";

const useDebounce = (value, delay, callback) => {
  let handlerId;

  useEffect(() => {
    handlerId = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handlerId);
    };
  }, [value]);
};

export default useDebounce;
