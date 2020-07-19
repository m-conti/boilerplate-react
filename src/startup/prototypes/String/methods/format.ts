import { template } from 'lodash';


export default function(
  this: string,
  params: object
): string {
  return (template(this))(params);
}
