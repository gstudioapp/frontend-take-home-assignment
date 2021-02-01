const withTM = require('next-transpile-modules')([
  '@popperjs/core/lib/popper-lite',
  '@popperjs/core/lib/enums',
  '@popperjs/core/lib/types',
  '@popperjs/core/lib/modifiers/flip',
  '@popperjs/core/lib/modifiers/preventOverflow',
]);

module.exports = withTM({
  env: {},
  api: {
    externalResolver: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
});
