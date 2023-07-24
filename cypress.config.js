const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allureResultsPath: "allure-results",
    allure: "true",
    allureAttachRequests: "true",
    allureClearSkippedTests: "true"
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://www.btcbit.net/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    waitForAnimations: true,
    animationDistanceThreshold: 5,
    defaultCommandTimeout: 9000,
    pageLoadTimeout: 30000,
    failOnStatusCode: false,
    chromeWebSecurity: false,
    video: false
  },
});
