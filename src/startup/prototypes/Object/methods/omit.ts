import omit from 'lodash/omit';
import withMapper from '../../helpers/withMapper';
import { Dictionary, NumericDictionary } from 'types/lodash';


export default withMapper(function(
  this: Dictionary<never>|NumericDictionary<never>,
  paths: [string]|string
): object {
  return omit(this, paths);
});
