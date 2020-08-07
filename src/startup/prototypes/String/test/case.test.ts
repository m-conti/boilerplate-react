import 'startup';


describe('String.prototypes.ascase', () => {
  const string1 = 'Foo Bar';
  const string2 = 'fooBar';
  const string3 = '__FOO_BAR__';
  const string4 = 'foo bar';
  const string5 = 'foo-bar';

  it('ascase pascal', () => {
    const res = 'FooBar';
    const res1 = string1.ascase('pascal');
    const res2 = string2.ascase('pascal');
    const res3 = string3.ascase('pascal');
    const res4 = string4.ascase('pascal');
    const res5 = string5.ascase('pascal');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase camel', () => {
    const res = 'fooBar';
    const res1 = string1.ascase('camel');
    const res2 = string2.ascase('camel');
    const res3 = string3.ascase('camel');
    const res4 = string4.ascase('camel');
    const res5 = string5.ascase('camel');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase snake', () => {
    const res = 'foo_bar';
    const res1 = string1.ascase('snake');
    const res2 = string2.ascase('snake');
    const res3 = string3.ascase('snake');
    const res4 = string4.ascase('snake');
    const res5 = string5.ascase('snake');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase start', () => {
    const res = 'Foo Bar';
    const res1 = string1.ascase('start');
    const res2 = string2.ascase('start');
    const res3 = string3.ascase('start');
    const res4 = string4.ascase('start');
    const res5 = string5.ascase('start');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual('FOO BAR');
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase kebab', () => {
    const res = 'foo-bar';
    const res1 = string1.ascase('kebab');
    const res2 = string2.ascase('kebab');
    const res3 = string3.ascase('kebab');
    const res4 = string4.ascase('kebab');
    const res5 = string5.ascase('kebab');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase macro', () => {
    const res = 'FOO_BAR';
    const res1 = string1.ascase('macro');
    const res2 = string2.ascase('macro');
    const res3 = string3.ascase('macro');
    const res4 = string4.ascase('macro');
    const res5 = string5.ascase('macro');
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);
  });
  it('ascase upper', () => {
    const res1 = string1.ascase('upper');
    const res2 = string2.ascase('upper');
    const res3 = string3.ascase('upper');
    const res4 = string4.ascase('upper');
    const res5 = string5.ascase('upper');
    expect(res1).toEqual('FOO BAR');
    expect(res2).toEqual('FOOBAR');
    expect(res3).toEqual('__FOO_BAR__');
    expect(res4).toEqual('FOO BAR');
    expect(res5).toEqual('FOO-BAR');
  });
  it('ascase lower', () => {
    const res1 = string1.ascase('lower');
    const res2 = string2.ascase('lower');
    const res3 = string3.ascase('lower');
    const res4 = string4.ascase('lower');
    const res5 = string5.ascase('lower');
    expect(res1).toEqual('foo bar');
    expect(res2).toEqual('foobar');
    expect(res3).toEqual('__foo_bar__');
    expect(res4).toEqual('foo bar');
    expect(res5).toEqual('foo-bar');
  });
  it('ascase capitalize', () => {
    const res1 = string1.ascase('capitalize');
    const res2 = string2.ascase('capitalize');
    const res3 = string3.ascase('capitalize');
    const res4 = string4.ascase('capitalize');
    const res5 = string5.ascase('capitalize');
    expect(res1).toEqual('Foo bar');
    expect(res2).toEqual('Foobar');
    expect(res3).toEqual('__foo_bar__');
    expect(res4).toEqual('Foo bar');
    expect(res5).toEqual('Foo-bar');
  });
});
