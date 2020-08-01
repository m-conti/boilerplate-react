import map from 'lodash/map';

export default (fct: Function): Function => {
  const wrapper = function(this: object, ...args: unknown[]): unknown {
    if (this instanceof Array) return map(this, (elem) => wrapper.call(elem, ...args));
    return fct.call(this, ...args);
  };
  return wrapper;
};
