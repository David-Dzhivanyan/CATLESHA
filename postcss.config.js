module.exports = ({ env }) => ({
  plugins: {
    // Add browser prefixes and remove obsoleted
    'autoprefixer': 'production' === env ? {} : false,
  },
});
