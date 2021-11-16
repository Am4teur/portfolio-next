module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: []
    })
    // Important: return the modified config
    return config
  },
}