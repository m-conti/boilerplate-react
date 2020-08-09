import { useState } from 'react';

const useForceUpdate = (): (() => void) => {
  const [ , setState ] = useState<object>();
  return () => setState({});
}

export default useForceUpdate;
