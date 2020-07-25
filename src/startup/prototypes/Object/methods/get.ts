import get from 'lodash/get';


export default function(
  this: object,
  path: [string]|string,
  defaultValue: any = null
): any {
  return get(this, path, defaultValue);
}
