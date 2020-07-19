import uniqid from 'uniqid';


export default function(
  this: File,
  path: string
): { key: string, data: File } {
  const key = uniqid();
  return {
    key: `${path}/${key}`,
    data: this,
  };
}
