import get from 'lodash/get';


export default function(
  this: object,
  path: (string|number)[],
  defaultValue: any = null
): any {
  for (const value of path) {
    const ret = get(this, value);
    if (ret) return ret;
  }
  return defaultValue;
}
