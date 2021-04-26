import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import startCase from 'lodash/startCase';
import kebabCase from 'lodash/kebabCase';
import upperFirst from 'lodash/upperFirst';
import upperCase from 'lodash/toUpper';
import lowerCase from 'lodash/toLower';
import capitalize from 'lodash/capitalize';

import { IFunctionalMap } from 'types/types';

const cases: IFunctionalMap = {
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
