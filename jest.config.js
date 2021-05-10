module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^startup(.*)$': '<rootDir>/src/startup$1',
    '^locales(.*)$': '<rootDir>/src/locales$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^Pages(.*)$': '<rootDir>/src/Pages$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
};
