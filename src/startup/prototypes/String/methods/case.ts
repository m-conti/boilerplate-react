import { camelCase, snakeCase, startCase, kebabCase, upperFirst, upperCase, lowerCase, capitalize } from 'lodash';
import { tFunctionalMap } from 'typings/types';

const cases: tFunctionalMap = {
  'pascal': (s:string) => upperFirst(camelCase(s)), 'camel': camelCase,
  'snake': snakeCase, 'start': startCase, 'kebab': kebabCase,
  'upper': upperCase, 'lower': lowerCase, 'capitalize': capitalize,
  'macro': (s:string) => upperCase(snakeCase(s)),
};

export default function(
  this: string,
  select: 'pascal'|'camel'|'snake'|'start'|'kebab'|'upper'|'lower'|'capitalize'|'macro',
): string {
  return (cases[select] || ((): string => (this)))(this);
}
