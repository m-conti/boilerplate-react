import { invert } from 'lodash';


export default function(
  this: object,
): object {
  return invert(this);
}
