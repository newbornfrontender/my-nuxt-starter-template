import StyleLintPlugin from 'stylelint-webpack-plugin';

export default async function() {
  this.extendBuild((config) => {
    config.plugins.push(
      new StyleLintPlugin({
        files: '**/*.(css|vue)',
      }),
    );
  });
}
