import map from 'lodash/map';
import { IFunctionImport } from 'types/types';

export default (Set: ObjectConstructor, methods: IFunctionImport): void => {
  map(methods, (elem, name) => {
    if (!(Set.defineProperty instanceof Function)) return;

    try { Set.defineProperty(Set.prototype, name, { value: elem }); }
    catch (e) { console.error(e); }
  });
};
