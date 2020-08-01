import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import withMapper from '../../helpers/withMapper';
import { Dictionary, NumericDictionary } from 'types/lodash';


export default withMapper(function(
  this: Dictionary<never>|NumericDictionary<never>,
  arg: [string]|string|((value: never, key: string) => unknown)
): object {
  if (typeof(arg) === 'function')
    return omitBy(this, arg);
  return omit(this, arg);
});
