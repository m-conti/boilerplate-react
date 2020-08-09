import template from 'lodash/template';
import { TemplateOption } from 'types/lodash';

export default function(
  this: string,
  params?: object,
  option?: TemplateOption
): string {
  return template(this, option)(params);
}
