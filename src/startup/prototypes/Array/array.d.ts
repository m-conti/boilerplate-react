import { ObjectIteratee } from 'types/lodash';

declare global {
  interface Array<T> {
    asfirst(): T | unknown | null;
    aslast(): T | unknown | null;
    asflat(depth?: number): any[];
    asshuffle(): Array<T>;
    asorder(
      iteratees:
        | string
        | number
        | symbol
        | [string | number | symbol, any]
        | readonly [ObjectIteratee<object>]
        | ObjectIteratee<object>
        | [ObjectIteratee<object>]
        | undefined,
      orders?:
        | boolean
        | 'asc'
        | 'desc'
        | readonly (boolean | 'asc' | 'desc')[]
        | undefined
    ): any[];
  }
}
