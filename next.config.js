const withTM = require('next-transpile-modules')([
  '@popperjs/core/lib/popper-lite',
  '@popperjs/core/lib/enums',
  '@popperjs/core/lib/types',
  '@popperjs/core/lib/modifiers/flip',
  '@popperjs/core/lib/modifiers/preventOverflow'
]);

module.exports = withTM({
  api: {
    externalResolver: true,
  },
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
});
