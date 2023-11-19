import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay) => {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [initialValue, delay]);

  return debounceValue;
};
