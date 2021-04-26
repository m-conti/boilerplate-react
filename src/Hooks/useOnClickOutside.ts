import { useEffect, RefObject } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: CallableFunction = () => null
): void => {

  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (ref?.current?.contains(event.target as HTMLElement))
        return;
      callback(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ ref, callback ]);
}

export default useOnClickOutside;
