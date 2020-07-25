import moment from 'moment';


export default function(
  this: Date,
  format?: string,
): moment.Moment {
  return moment(this, format);
}
