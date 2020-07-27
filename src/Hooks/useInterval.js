import React, { useEffect, useRef } from 'react';

function useInterval(callback, delay = 1) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const id = setInterval(savedCallback.current, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
