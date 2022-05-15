const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  const isLocalhost = phase === PHASE_DEVELOPMENT_SERVER

  const images = {
    domains: ['www.edamam.com']
  }

  const webpack = (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }

  const env = {
    NextUrl: (() => {
      if (isLocalhost) return 'http://localhost:3000'
      return 'https://swisstest.vercel.app'
    })()
  }

  return {
    images,
    webpack,
    env
  }
}