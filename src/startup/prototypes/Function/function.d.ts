import { DebounceSettings } from 'types/lodash';

declare interface Function {
  asdebounce(wait?: number, options?: DebounceSettings): (...args: unknown[]) => unknown;
  asdelay(...params: unknown[]): unknown;
}
