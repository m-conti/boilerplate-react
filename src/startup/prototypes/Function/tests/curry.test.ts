import 'startup';

describe('Function.prototypes.ascurry', () => {
  let func: Function;

  beforeEach(() => {
    func = function(a: number, b: number, c: number) {
      return [ a, b, c ];
    };
  });

  it('ascurry 1 by 1', () => {
    func = func.ascurry();
    expect(func(1)(2)(3)).toEqual([ 1, 2, 3 ]);
  });
  it('ascurry 2 and 1', () => {
    func = func.ascurry();
    expect(func(1, 2)(3)).toEqual([ 1, 2, 3 ]);
  });
  it('ascurry 3', () => {
    func = func.ascurry();
    expect(func(1, 2, 3)).toEqual([ 1, 2, 3 ]);
  });

  it('ascurry right 1 by 1', () => {
    func = func.ascurry('right');
    expect(func(3)(2)(1)).toEqual([ 1, 2, 3 ]);
  });
  it('ascurry right 2 and 1', () => {
    func = func.ascurry('right');
    expect(func(2, 3)(1)).toEqual([ 1, 2, 3 ]);
  });
  it('ascurry right 3', () => {
    func = func.ascurry('right');
    expect(func(1, 2, 3)).toEqual([ 1, 2, 3 ]);
  });
});
