module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": [
      "babel-jest",
      { presets: [["babel-preset-gatsby", { reactRuntime: "automatic" }]] },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/.cache", "<rootDir>/public"],
};
