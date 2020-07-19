import moment from 'moment-timezone';


export default function(
  this: Date,
  format?: string,
): moment.Moment {
  return moment(this, format);
}
