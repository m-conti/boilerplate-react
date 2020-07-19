import { cloneDeep } from 'lodash';

export default (fct: Function): Function => {
  const wrapper = function(this: object, ...args: [any]): any {
    return fct.call(cloneDeep(this), ...args);
  };
  return wrapper;
};
