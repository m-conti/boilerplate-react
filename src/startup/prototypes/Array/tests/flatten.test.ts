import 'startup';

const array = [ 1, [ 2, [ 3, [4]], 2.1 ]];
const arrayObj = [{v: 1}, [{v: 2}, [{v: 3}, [{v: 4}]], {v: 2.1}]];

describe('Array.prototypes.asflat', () => {
  it('flat array 0 layer', () => {
    expect(array.asflat(0)).toEqual(array);
  });
  it('flat array 1 layer', () => {
    expect(array.asflat(1)).toEqual([ 1, 2, [ 3, [4]], 2.1 ]);
  });
  it('flat array 2 layers', () => {
    expect(array.asflat(2)).toEqual([ 1, 2, 3, [4], 2.1 ]);
  });
  it('flat array all', () => {
    expect(array.asflat()).toEqual([ 1, 2, 3, 4, 2.1 ]);
  });
  it('flat array of object 0 layer', () => {
    expect(arrayObj.asflat(0)).toEqual(arrayObj);
  });
  it('flat array of object 1 layer', () => {
    expect(arrayObj.asflat(1)).toEqual([{v: 1}, {v: 2}, [{v: 3}, [{v: 4}]], {v: 2.1}]);
  });
  it('flat array of object 2 layers', () => {
    expect(arrayObj.asflat(2)).toEqual([{v: 1}, {v: 2}, {v: 3}, [{v: 4}], {v: 2.1}]);
  });
  it('flat array of object all', () => {
    expect(arrayObj.asflat()).toEqual([{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 2.1}]);
  });
});
