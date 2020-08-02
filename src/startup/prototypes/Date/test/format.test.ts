import 'startup';

const date = new Date(2020, 10);

describe('Date.prototypes.asformat', () => {
  it('format YYYY', () => {
    expect(date.asformat('YYYY')).toEqual('2020');
  });
  it('format LLLL', () => {
    expect(date.asformat('LLLL')).toEqual('dimanche 1 novembre 2020 00:00');
  });
});
