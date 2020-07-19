import { cloneDeep } from 'lodash';


export default function(
  this: object
): object {
  return cloneDeep(this);
}
