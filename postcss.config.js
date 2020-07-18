

module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': env === 'production' ? {} : false,
    'autoprefixer': env === 'production' ? {} : false,
  }
});