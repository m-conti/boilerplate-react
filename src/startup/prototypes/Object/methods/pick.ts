import { pick, pickBy } from 'lodash';
import withMapper from '../../helpers/withMapper';


export default withMapper(function(
  this: object,
  arg: [string]|string|((value: never, key: string) => unknown)
): object {
  if (typeof(arg) === 'function')
    return pickBy(this, arg);
  return pick(this, arg);
});
