import every from 'lodash/every';
import validator from 'validator';
import { tCheckString, tImport } from 'types/types';


const types = [
  {
    check: (select: unknown): boolean => (select instanceof RegExp),
    action: function(this: string, select: unknown): boolean {
      return (select as RegExp).test(this)
    }
  },
  {
    check: (select: unknown): boolean => (typeof select === 'string'),
    action: function(this: string, select: unknown, ...params:any): boolean {
      return ((validator as unknown as tImport)[(select as string)] || (() => false))(this, ...params)
    }
  },
  {
    check: (select: unknown): boolean => (select instanceof Object),
    action: function(this: string, select: unknown): boolean {
      return ((validator as unknown as tImport)[(select as tCheckString).check])(this, (select as tCheckString)?.params)
    }
  },
];

export default function(
  this: string,
  selects: string|tCheckString|RegExp|[string|tCheckString|RegExp],
  ...params:[any]
): boolean {
  if (selects instanceof Array)
    return every(selects, (select) => types.find(({ check }) => check(select))?.action.call(this, select));
  return Boolean(types.find(({ check }) => check(selects))?.action.call(this, selects, ...params));
}
