import cloneDeep from 'lodash/cloneDeep';

export default (fct: Function): Function => {
  const wrapper = function(this: object, ...args: unknown[]): unknown {
    return fct.call(cloneDeep(this), ...args);
  };
  return wrapper;
};
