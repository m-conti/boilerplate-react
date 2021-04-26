import { useRef, useEffect } from 'react';


const useEventListener = (
  eventName: string,
  handler = () => null,
  element: Node | Window = window
): void => {

  const savedHandler = useRef<Function>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element?.addEventListener) return;
    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [ eventName, element ]);
}

export default useEventListener;
