import 'startup';

describe('Function.prototypes.asdebounce', () => {
  let value = false;

  beforeEach(() => {
    value = false;
  });

  it('asdebounce active async', (done) => {
    const fct: Function = (() => {
      value = true;
      expect(value).toBeTruthy();
      done();
    }).asdebounce(10);
    fct();
    expect(value).toBeFalsy();
  });
  it('asdebounce active at good time', (done) => {
    const fct: Function = (() => {
      value = true;
      expect(value).toBeTruthy();
    }).asdebounce(15);
    fct();
    setTimeout(() => {
      expect(value).toBeFalsy();
    }, 10);
    setTimeout(() => {
      expect(value).toBeTruthy();
      done();
    }, 20);
  });
});
