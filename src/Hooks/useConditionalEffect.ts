import { useEffect, useRef, DependencyList } from 'react';


const useConfitionalEffect = (
  effect: (lastDeps?: DependencyList) => (void | (() => void)),
  condition: (lastDeps?: DependencyList) => boolean,
  deps?: DependencyList
): void => {

  const lastDeps = useRef(deps);

  useEffect(() => {
    const saveLastDeps = lastDeps.current;
    if (condition?.(saveLastDeps)) {
      lastDeps.current = deps;
      return effect(saveLastDeps);
    }
  }, deps);
};

export default useConfitionalEffect;

