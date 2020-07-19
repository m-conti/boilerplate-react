import { delay } from 'lodash';


export default function(
  this: (...args: any) => any,
  wait: number,
  ...params: [any]
): any {
  return delay(this, wait, ...params);
}
