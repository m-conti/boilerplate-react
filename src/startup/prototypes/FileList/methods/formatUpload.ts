import { map } from 'lodash';
import formatUpload from '../../File/methods/formatUpload';


export default function(
  this: FileList,
  path: string
): object {
  return map(this, (file) => formatUpload.bind(file)(path));
}
