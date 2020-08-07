import 'startup';

describe('Function.prototypes.asdelay', () => {
  let value = false;

  beforeEach(() => {
    value = false;
  })

  it('asdelay active async', (done) => {
    (() => {
      value = true;
      expect(value).toBeTruthy();
      done();
    }).asdelay(10);
    expect(value).toBeFalsy();
  });
  it('asdelay active at good time', (done) => {
    (() => {
      value = true;
      expect(value).toBeTruthy();
    }).asdelay(15);

    setTimeout(() => {
      expect(value).toBeFalsy();
    }, 10);
    setTimeout(() => {
      expect(value).toBeTruthy();
      done();
    }, 20);
  });
});
