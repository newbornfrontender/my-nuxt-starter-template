export default async function () {
  // this.extendBuild((config, ctx) => {
  this.extendBuild((config, { isDev, isClient }) => {
    // if (ctx.isDev && ctx.isClient) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(jsx?|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      });
    };
  });
};
