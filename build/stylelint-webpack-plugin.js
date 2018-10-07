import StylelintWebpackPlugin from 'stylelint-webpack-plugin';

export default async function () {
  this.extendBuild(config => {
    config.plugins.push(
      new StylelintWebpackPlugin({
        files: '**/*.(css|vue)',
      }),
    );
  });
};
