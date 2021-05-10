import setPrototypes from './setPrototypes';

setPrototypes(Object, require('./Object'));
setPrototypes(Array, require('./Array'));
setPrototypes(String, require('./String'));
setPrototypes(Date, require('./Date'));
setPrototypes(Function, require('./Function'));
