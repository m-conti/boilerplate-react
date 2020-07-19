import { orderBy, ObjectIteratee, ObjectIterator } from 'lodash';


export default function(
  this: Array<object>,
  iteratees:
    string
    |number
    |symbol
    |[string|number|symbol, any]
    |ObjectIterator<object, unknown>
    |readonly [ObjectIteratee<object>]
    |undefined,
  orders?: boolean|'asc'|'desc'|readonly [(boolean|'asc'|'desc')]|undefined
): Array<object> {
  return orderBy(this, iteratees, orders);
}
