import { flattenDeep, flattenDepth } from 'lodash';


export default function(
  this: Array<any>,
  depth?: number,
): Array<any> {
  if (depth) return flattenDepth(this, depth);
  return flattenDeep(this);
}
