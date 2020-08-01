import delay from 'lodash/delay';


export default function(
  this: (...args: unknown[]) => unknown,
  wait: number,
  ...params: unknown[]
): unknown {
  return delay(this, wait, ...params);
}
