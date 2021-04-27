import map from 'lodash/map';
import set from 'lodash/set';
import { IFunctionImport } from 'types/types';

export default (Set: ObjectConstructor, methods: IFunctionImport): void => {
  map(methods, (elem, name) => {
    if ((Set.defineProperty instanceof Function))
      try { Set.defineProperty(Set.prototype, name, { value: elem }); }
      catch (e) { console.error(e); }

    if (!(name in Set.prototype))
      set(Set.prototype, name, elem); // eslint-disable-line no-extend-native
  });
};
