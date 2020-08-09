import 'startup';

describe('String.prototype.asformat', () => {
  const string1 = 'print ${}';
  const string2 = 'this is a variable ${0} and another variable ${1}';
  const string3 = 'var1: ${var1} | var2: ${var2} | var3: ${var3}';
  it('test without params', () => {
    expect(string1.asformat()).toEqual('print ');
    expect(string2.asformat()).toEqual('this is a variable 0 and another variable 1');
    expect(() => string3.asformat()).toThrow();
  });
  it('test with params', () => {
    expect(string3.asformat({ var1: 'un', var2: true, var3: 3 })).toEqual('var1: un | var2: true | var3: 3');
  });
  it('${} don\'t work', () => {
    expect(string1.asformat(['me'])).toEqual('print ');
    expect(string1.asformat({'': 'me'})).toEqual('print ');
  })
  it('numeric valiable don\'t work', () => {
    expect(string2.asformat({ '0': 1, '1': 2 })).toEqual('this is a variable 0 and another variable 1');
    expect(string2.asformat([ 1, 2 ])).toEqual('this is a variable 0 and another variable 1');
  })
});
