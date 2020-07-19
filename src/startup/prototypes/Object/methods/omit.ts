import { omit } from 'lodash';
import withMapper from '../../helpers/withMapper';


export default withMapper(function(
  this: object,
  paths: [string]|string
): object {
  return omit(this, paths);
});
