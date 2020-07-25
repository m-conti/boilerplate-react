import invert from 'lodash/invert';


export default function(
  this: object,
): object {
  return invert(this);
}
