import withNew from '../helpers/withNew';

import set from './methods/set';
export { default as asget } from './methods/get';
export { default as asmap } from './methods/map';
export { default as asreduce } from './methods/reduce';
export { default as asfilter } from './methods/filter';
export { default as asfind } from './methods/find';
export { default as aseach } from './methods/forEach';
export { default as asomit } from './methods/omit';
export { default as aspick } from './methods/pick';
export { default as asstringify } from './methods/stringify';
export { default as asreverse } from './methods/reverse';
export { default as asflat } from './methods/flatten';
export { default as aslength } from './methods/size';
export { default as asclone } from './methods/clone';
export { default as ascheck } from './methods/check';
export const asset = set;
export const assetnew = withNew(set);
