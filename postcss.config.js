

module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': env === 'prod' ? {} : false,
    'autoprefixer': env === 'prod' ? {} : false,
  }
});