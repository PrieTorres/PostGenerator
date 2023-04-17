module.exports = {
  setupFiles: ['<rootDir>/script/test-setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist', 'src'], // might want?
  modulePathIgnorePatterns: ["aulas"],
  moduleNameMapper: {
    '@components(.*)': '<rootDir>/src/components$1' // might want?
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'] // this is the KEY
  // note it should be in the top level of the exported object.
};