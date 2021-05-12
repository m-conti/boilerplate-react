import useEventListener from 'Hooks/useEventListener';
import { useRef, useEffect } from 'react';


const useMouseMove = (activator: boolean, effect: (x?: number, y?: number) => void|(()=> void)): void => {

  const endHandler = useRef<null|void|(() => void)>(null);

  const mouseMoveHandler = (event: Event) => {
    endHandler.current = effect((event as MouseEvent).movementX, (event as MouseEvent).movementY);
  };

  useEventListener('mousemove', mouseMoveHandler, activator);
  useEffect(() => {
    if (endHandler.current) endHandler.current();
    endHandler.current = null;
  }, [activator]);
};

export default useMouseMove;
