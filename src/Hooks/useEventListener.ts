import { useRef, useEffect } from 'react';


const useEventListener = (
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  activator = true,
  element: Node | Window = window,
): void => {

  const savedHandler = useRef<EventListenerOrEventListenerObject>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element?.addEventListener || !activator) return;
    const eventListener = savedHandler.current;
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [ eventName, element, activator ]);
};

export default useEventListener;
