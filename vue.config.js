module.exports = {
  css: {
    loaderOptions: {
      css: {
        localIdentName: process.env.NODE_ENV === 'production' ? 'dvd-[hash:base64:8]' : '[local]_[hash:base64:8]'
      },
      sass: {
        prependData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
};