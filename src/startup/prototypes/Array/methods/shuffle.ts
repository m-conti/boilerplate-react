import shuffle from 'lodash/shuffle';

export default function(
  this: Array<unknown>,
): Array<unknown> | null | undefined {
  return shuffle(this);
}
