import moment from 'moment';


export default function(
  this: Date,
  format?: string,
): string {
  return moment(this).format(format);
}
