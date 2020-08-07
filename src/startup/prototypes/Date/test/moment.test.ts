import 'startup';
import moment from 'moment';

const date = new Date('2020-09-30T22:00:00.000Z');

describe('Date.prototypes.asmoment', () => {
  it('Date -> moment', () => {
    expect(date.asmoment().format()).toEqual(moment('2020-09-30T22:00:00.000Z').format());
  });
  it('Date -> moment -> Date', () => {
    expect(date.asmoment().toDate()).toEqual(date);
  });
});
