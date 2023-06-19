module.exports = (api: any) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
  }
}
