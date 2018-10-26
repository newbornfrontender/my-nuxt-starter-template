import ImageminPlugin from 'imagemin-webpack-plugin';

export default async function() {
  this.extendBuild((config, { isDev }) => {
    if (!isDev) {
      config.plugins.push(
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
        }),
      );
    }
  });
}
