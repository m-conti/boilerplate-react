import template from 'lodash/template';


export default function(
  this: string,
  params: object
): string {
  return (template(this))(params);
}
