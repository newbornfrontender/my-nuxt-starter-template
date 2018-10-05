module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'vue',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^(~~|@@)?/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['<rootDir>/test/unit/**/*.(test|spec).(js|jsx)'],
  testURL: 'http://localhost/',
};
