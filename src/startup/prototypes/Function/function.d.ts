import { DebounceSettings } from 'types/lodash';

declare global {
  interface Function {
    asdebounce(
      wait?: number,
      options?: DebounceSettings
    ): (...args: unknown[]) => unknown;
    asdelay(...params: unknown[]): unknown;
  }
}
