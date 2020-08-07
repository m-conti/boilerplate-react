import { ConformsPredicateObject } from 'types/lodash';

declare global {
  interface Object {
    asget(path: [string] | string, defaultValue?: any): unknown;
    asmap(iteratee: Function, option?: 'key' | 'value' | 'array' | 'flat');
    asreduce(
      iteratee: MemoListIterator<unknown, unknown, [unknown]>,
      accumulator?: any,
      direction?: 'left' | 'right'
    ): any;
    asfilter(iteratee: Function): object;
    asfind(predicate: Function, fromIndex?: number): unknown;
    aseach(iteratee: Function, direction?: 'left' | 'right'): object;
    asomit(
      arg: [string] | string | ((value: never, key: string) => unknown)
    ): object;
    aspick(
      arg: [string] | string | ((value: never, key: string) => unknown)
    ): object;
    asstringify(
      replacer?: [string | number] | null | undefined,
      space?: string | number | undefined
    ): string;
    asreverse(): object;
    asflat(): object;
    aslength(): number;
    asclone(): object;
    ascheck(
      select: 'every' | 'some' | 'none',
      predicate: ConformsPredicateObject<object> | object
    ): boolean;
    asset(path: [string] | string, defaultValue?: any): object;
    assetnew(path: [string] | string, defaultValue?: any): object;
  }
}
