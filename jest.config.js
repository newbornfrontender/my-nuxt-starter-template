module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'vue'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^~~?/(.*)$': '<rootDir>/$1',
    '^@@?/(.*)$': '<rootDir>/$1',
  },
};
