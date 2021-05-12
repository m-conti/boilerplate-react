import { useState, } from 'react';

const useLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T | ((value:T) => T)
): [T, React.Dispatch<T>] => {

  const [ storedValue, setStoredValue ] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((value:T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    }
    catch (error) {
      console.log(error);
    }
  };

  return [ storedValue, setValue ];
};

export default useLocalStorage;
