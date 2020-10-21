module.exports = {
  collectCoverage: true,
  moduleNameMapper: { '.+\\.(svg|png)$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['./jest.setup.js']
};
