module.exports = {
  env: {
    login_url: 'https://qa-gcloud-sso.invue-am.com/',
    Username: 'mjadmin',
    Password: 'Password@123',
  },
  watchForFileChanges: true,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'cypress/report/mochawesome-report',
    inlineAssets: true,
    video: 'false',
    testFiles: [
      'TC_Login.js',
      'TC_AddNewUser.js',
      'TC_VerifyCreatedUserData.js',
      'TC_DeleteUser.js',
    ],
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}
