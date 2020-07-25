import debounce from 'lodash/debounce';
import { DebounceSettings } from 'types/lodash';


export default function(
  this: (...args: any) => any,
  wait?: number,
  options?: DebounceSettings,
): (...args: any) => any {
  return debounce(this, wait, options);
}
