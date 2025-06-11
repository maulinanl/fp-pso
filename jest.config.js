module.exports = {
  transform: {
    '^.+\\.(js|jsx|mjs|cjs)$': ['babel-jest', { rootMode: "upward" }],
  },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  fakeTimers: {
    enableGlobally: true
  }
};
