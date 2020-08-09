import 'startup';
import { Moment } from 'moment';

describe('String.prototype.asconvert', () => {
  it('date', () => {
    expect(('2020'.asconvert('date') as Moment).format()).toEqual('2020-01-01T00:00:00+01:00');
    expect(('1995-12-25'.asconvert('date') as Moment).format()).toEqual('1995-12-25T00:00:00+01:00');
    expect(('2013-02-08 24:00:00.000'.asconvert('date') as Moment).format()).toEqual('2013-02-09T00:00:00+01:00');
  });
});
