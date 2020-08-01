import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

const useUpdate = (callback: EffectCallback, args: DependencyList): void => {
  const didMount = useRef<boolean>(false);
  useEffect(() => {
    if (didMount.current)
      return callback();
    didMount.current = true
  }, args);
}

export default useUpdate;
