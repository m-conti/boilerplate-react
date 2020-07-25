import orderBy from 'lodash/orderBy';
import { ObjectIteratee } from 'types/lodash';


export default function(
  this: Array<object>,
  iteratees:
    string
    |number
    |symbol
    |[string|number|symbol, any]
    |readonly [ObjectIteratee<object>]
    |ObjectIteratee<object>
    |[ObjectIteratee<object>]
    |undefined,
  orders?: boolean|'asc'|'desc'|readonly [(boolean|'asc'|'desc')]|undefined
): Array<object> {
  return orderBy(this, iteratees, orders);
}
