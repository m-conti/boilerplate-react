import { useState, RefObject } from 'react';
import useMount from './useMount';

const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin = 0) : boolean => {
  const [ isIntersecting, setIntersecting ] = useState<boolean>(false);

  useMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin: `${rootMargin}px` }
    );
    if (ref.current) {
      observer.observe(ref.current);
      return () => observer.unobserve(ref.current as HTMLElement);
    }
  });
  return isIntersecting;
};

export default useOnScreen;
