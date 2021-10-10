module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }

  const withTM = require('next-transpile-modules')(['read-more-read-less-toggler']); // pass the modules you would like to see transpiled

module.exports = withTM();