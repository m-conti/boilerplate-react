import 'startup';

describe('Array.prototypes.asfirst', () => {
  it('on empty array', () => {
    expect([].asfirst()).toBeNull();
  });
  it('on array', () => {
    expect([ 'first', 'second' ].asfirst()).toEqual('first');
  });
});
