

export default function(
  this: Array<any>,
): any {
  return this.length ? this[this.length - 1] : null;
}
