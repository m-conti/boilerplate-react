import debounce from 'lodash/debounce';
import { DebounceSettings } from 'types/lodash';


export default function(
  this: (...args: unknown[]) => unknown,
  wait?: number,
  options?: DebounceSettings,
): (...args: unknown[]) => unknown {
  return debounce(this, wait, options);
}
