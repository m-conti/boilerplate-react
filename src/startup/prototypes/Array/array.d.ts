declare interface Array<T> {
  asfirst(): T | null;
  aslast(): T | null;
  asflat(depth?: number): any[];
  asorder(
    iteratees:
    string
    |number
    |symbol
    |[string|number|symbol, any]
    |readonly [ObjectIteratee<object>]
    |ObjectIteratee<object>
    |[ObjectIteratee<object>]
    |undefined,
    orders?: boolean|'asc'|'desc'|readonly (boolean|'asc'|'desc')[]|undefined
  ) : any[];
}
