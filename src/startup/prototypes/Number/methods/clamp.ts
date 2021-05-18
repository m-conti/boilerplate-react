import clamp from 'lodash/clamp';

export default function(
  this: number,
  lower: number,
  upper: number
): number {
  return clamp(this, lower, upper);
}
