module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'svg'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/index.tsx',
    '!**/*.d.ts',
  ],
  setupFiles: [],
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: ['./.next/'],
  testMatch: ['**/__tests__/*.(ts|tsx)', '**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
