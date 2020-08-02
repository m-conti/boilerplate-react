import 'startup';
import moment from 'moment';

const date = new Date(2020, 10);

describe('Date.prototypes.asmoment', () => {
  it('Date -> moment', () => {
    expect(date.asmoment()).toEqual(moment('2020 10'));
  });
  it('Date -> moment -> Date', () => {
    expect(date.asmoment().toDate()).toEqual(date);
  });
});
