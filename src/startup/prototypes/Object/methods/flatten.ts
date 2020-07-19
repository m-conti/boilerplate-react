import { reduce } from 'lodash';

function flatten(this:object, prefix = ''): object {
  return reduce(this, (obj:object, elem:unknown, key:string) => {
    const path = `${prefix}${prefix ? '.' : ''}${key}`;
    const value = elem instanceof Object ? flatten.call(elem, path) : { [path]: elem };
    return { ...obj, ...value };
  }, {});
}

export default function(
  this: object,
): object {
  return flatten.call(this);
}
