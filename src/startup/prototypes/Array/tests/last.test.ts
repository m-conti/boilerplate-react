import 'startup';

describe('Array.prototypes.aslast', () => {
  it('on empty array', () => {
    expect([].aslast()).toBeNull();
  });
  it('on array', () => {
    expect([ 'first', 'second' ].aslast()).toEqual('second');
  });
});
