module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /node_modules\/(debug|supports-color)/,
      type: "javascript/auto", // Treats CommonJS modules as ESM
    });
    return config;
  },
};
