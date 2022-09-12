const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'json', 'lcov'],
  displayName: 'gazeto',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: ['html', 'json', 'lcov'],
  rootDir: '.'
}
module.exports = createJestConfig(customJestConfig)
