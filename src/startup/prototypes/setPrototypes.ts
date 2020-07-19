import _ from 'lodash';
import { tImport } from 'typings/types';

export default (Set: ObjectConstructor, methods: tImport): void => {
  _.map(methods, (elem, name) => {
    if (typeof(Set.defineProperty) === 'function')
      try { Set.defineProperty(Set.prototype, name, { value: elem }); }
      catch (e) { console.error(e); }

    if (!(name in Set.prototype))
      _.set(Set.prototype, name, elem); // eslint-disable-line no-extend-native
  });
};
