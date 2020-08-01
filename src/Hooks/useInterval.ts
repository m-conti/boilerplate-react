import { useEffect, useRef } from 'react';

const useInterval = (callback = () => null, delay = 1): void => {
  const savedCallback = useRef<Function>(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const id = setInterval(savedCallback.current, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
