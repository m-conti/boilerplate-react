const path = require('path');


exports.path = path.resolve(__dirname, '../dist');
exports.publicPath = process.env.NODE_ENV === 'production' ? '/public/' : '/';
