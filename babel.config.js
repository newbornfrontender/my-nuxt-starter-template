module.exports = {
  presets: [
    [
      '@nuxtjs/babel-preset-app',
      {
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
