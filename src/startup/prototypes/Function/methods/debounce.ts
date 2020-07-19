import { debounce, DebounceSettings } from 'lodash';


export default function(
  this: (...args: any) => any,
  wait?: number,
  options?: DebounceSettings,
): (...args: any) => any {
  return debounce(this, wait, options);
}
