import { Dictionary, NumericDictionary } from 'types/lodash';


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  replacer: [string | number] | null | undefined,
  space?: string | number | undefined
): string {
  return JSON.stringify(this, replacer, space);
}
