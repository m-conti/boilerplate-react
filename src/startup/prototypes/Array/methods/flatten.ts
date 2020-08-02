import flattenDeep from 'lodash/flattenDeep';
import flattenDepth from 'lodash/flattenDepth';

export default function(
  this: Array<any>,
  depth?: number,
): Array<any> {
  if (depth !== undefined) return flattenDepth(this, depth);
  return flattenDeep(this);
}
