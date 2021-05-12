import { useEffect, EffectCallback } from 'react';

const useMount = (callback: EffectCallback): void => useEffect(callback, []);

export default useMount;
