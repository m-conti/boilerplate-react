import setPrototypes from './setPrototypes';

setPrototypes(String, require('./String'));
setPrototypes(Date, require('./Date'));
setPrototypes(File, require('./File'));
setPrototypes(Array, require('./Array'));
setPrototypes(FileList, require('./Array'));
setPrototypes(FileList, require('./FileList'));
setPrototypes(Function, require('./Function'));
setPrototypes(Object, require('./Object'));
