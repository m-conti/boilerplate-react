import moment from 'moment';


export default function(
  this: string,
  format?: string,
): moment.Moment {
  return moment(this, format);
}
