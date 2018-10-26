export default async function() {
  // Можно использовать ctx 2 аргументом или {isDev, isClient}
  this.extendBuild((config, {isDev, isClient}) => {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(jsx?|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      });
    }
  });
}
