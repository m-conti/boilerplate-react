import cloneDeep from 'lodash/cloneDeep';


export default function(
  this: object
): object {
  return cloneDeep(this);
}
