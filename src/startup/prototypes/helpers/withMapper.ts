import map from 'lodash/map';

export default (fct: Function): Function => {
  const wrapper = function(this: object, ...args: [any]): any {
    if (this instanceof Array || this instanceof FileList) return map(this, (elem) => wrapper.call(elem, ...args));
    return fct.call(this, ...args);
  };
  return wrapper;
};
