import ImageminPlugin from 'imagemin-webpack-plugin';

export default async function() {
  this.extendBuild((config, ctx) => {
    if (!ctx.isDev) {
      config.plugins.push(
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
        }),
      );
    }
  });
}
