import moment from 'moment-timezone';


export default function(
  this: string,
  format?: string,
): moment.Moment {
  return moment(this, format);
}
