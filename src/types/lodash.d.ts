
declare module 'types/lodash' {
  type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;
  type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | IterateeShorthand<TObject[keyof TObject]>;
  type Many<T> = T | ReadonlyArray<T>;
  type MemoListIterator<T, TResult, TList> = (prev: TResult, curr: T, index: number, list: TList) => TResult;
  type ConformsPredicateObject<T> = {
    [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any
  }
  interface Dictionary<T> {
    [index: string]: T;
  }
  interface NumericDictionary<T> {
      [index: number]: T;
  }
  interface DebounceSettings {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
}
}
