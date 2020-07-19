import { set } from 'lodash';
import withMapper from '../../helpers/withMapper';


export default withMapper(function(
  this: object,
  path: [string]|string,
  defaultValue: any = null
): object {
  return set(this, path, defaultValue);
});
