

export default function(
  this: object,
  replacer: [string | number] | null | undefined,
  space?: string | number | undefined
): string {
  return JSON.stringify(this, replacer, space);
}
