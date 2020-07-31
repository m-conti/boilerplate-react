import { useEffect, useRef } from 'react';

function useUpdate(callback = () => null, args) {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current)
      return callback();
    didMount.current = true
  }, args);
}

export default useUpdate;
