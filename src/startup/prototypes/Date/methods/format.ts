import moment from 'moment-timezone';


export default function(
  this: Date,
  format?: string,
): string {
  return moment(this).format(format);
}
