const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
      "styled-components": path.resolve("./node_modules/styled-components"),
    };
    return config;
  },
};
