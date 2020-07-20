import setPrototypes from './setPrototypes';

setPrototypes(String, require('./String'));
setPrototypes(Date, require('./Date'));
setPrototypes(Array, require('./Array'));
setPrototypes(Function, require('./Function'));
setPrototypes(Object, require('./Object'));
