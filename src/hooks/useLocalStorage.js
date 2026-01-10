import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
      const stored = window.localStorage.getItem(key);
      if (stored != null) {
        try {
          return JSON.parse(stored);
        } catch {
          return stored;
        }
      }
      return defaultValue;
    });
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }