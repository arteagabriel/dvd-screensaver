module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: process.env.NODE_ENV === 'production' ? 'dvd-[hash:base64:8]' : '[name]_[local]_[hash:base64:8]'
        },
      },
      sass: {
        prependData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
};