import map from 'lodash/map';
import set from 'lodash/set';
import { tImport } from 'types/types';

export default (Set: ObjectConstructor, methods: tImport): void => {
  map(methods, (elem, name) => {
    if (typeof(Set.defineProperty) === 'function')
      try { Set.defineProperty(Set.prototype, name, { value: elem }); }
      catch (e) { console.error(e); }

    if (!(name in Set.prototype))
      set(Set.prototype, name, elem); // eslint-disable-line no-extend-native
  });
};
