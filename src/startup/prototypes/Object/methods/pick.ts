import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import withMapper from '../../helpers/withMapper';
import { Dictionary, NumericDictionary } from 'types/lodash';


export default withMapper(function(
  this: Dictionary<never>|NumericDictionary<never>,
  arg: [string]|string|((value: never, key: string) => unknown)
): object {
  if (typeof(arg) === 'function')
    return pickBy(this, arg);
  return pick(this, arg);
});
