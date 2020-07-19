const _URL = window.URL || window.webkitURL;


export default async function(
  this: File
): Promise<object> {
  const img = new Image();
  img.src = _URL.createObjectURL(this);

  return new Promise((resolve) => {
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
      _URL.revokeObjectURL(img.src);
    };
  });
}
