// Im in monorepo and workspace i want jest to use also packages from root node_modules

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/test/__fixtures__', '<rootDir>/node_modules', '<rootDir>/dist'],
  transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native|@react-native(-community)?)/)'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testRegex: '(<rootDir>/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!**/{__mocks__,mocks}/**/*',
    '!**/*.{spec,test,styles}.{ts,tsx}',
    '!**/index.ts',
    '!**/styles.{ts,tsx}',
    '!**/icons/**/*',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
