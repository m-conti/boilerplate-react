import { useState, useEffect, EffectCallback } from 'react';


const useKeyPress = (targetKey: string, callback: EffectCallback): boolean => {
  const [ keyPressed, setKeyPressed ] = useState<boolean>(false);

  const downHandler = ({ key }: KeyboardEvent) => key === targetKey && setKeyPressed(true);
  const upHandler = ({ key }: KeyboardEvent) => key === targetKey && setKeyPressed(false);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  useEffect(() => {
    if (keyPressed) return callback()
  }, [keyPressed]);

  return keyPressed;
}

export default useKeyPress;
